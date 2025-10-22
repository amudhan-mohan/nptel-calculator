const { useState } = React;

function App() {
    const [assignments, setAssignments] = useState(Array(12).fill(''));
    const [result, setResult] = useState(null);

    const handleAssignmentChange = (index, value) => {
        const newAssignments = [...assignments];
        newAssignments[index] = value === '' ? '' : Math.min(100, Math.max(0, parseFloat(value) || 0));
        setAssignments(newAssignments);
    };

    const calculateInternalMarks = async () => {
        const validAssignments = assignments.filter(score => score !== '');
        
        if (validAssignments.length < 8) {
            alert('Please enter at least 8 assignment scores');
            return;
        }

        try {
            const response = await fetch('calculate.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assignments: assignments.map(score => score === '' ? 0 : parseFloat(score))
                }),
            });
            
            const data = await response.json();
            
            if (data.error) {
                alert(data.error);
                return;
            }
            
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
            // Fallback to client-side calculation
            calculateClientSide();
        }
    };

    const calculateClientSide = () => {
        const validAssignments = assignments
            .filter(score => score !== '')
            .map(score => parseFloat(score));

        const bestAssignments = [...validAssignments]
            .sort((a, b) => b - a)
            .slice(0, 8);

        const avgAssignmentScore = bestAssignments.reduce((a, b) => a + b, 0) / 8;
        const internalMarks = (avgAssignmentScore * 25) / 100;
        const isEligible = internalMarks >= 10;

        setResult({
            bestAssignments,
            avgAssignmentScore: avgAssignmentScore.toFixed(2),
            internalMarks: internalMarks.toFixed(2),
            isEligible,
            totalAssignmentsEntered: validAssignments.length
        });
    };

    const resetForm = () => {
        setAssignments(Array(12).fill(''));
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        NPTEL Internal Mark Calculator
                    </h1>
                    <p className="text-gray-600">
                        Calculate your internal marks based on assignment scores
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    {/* Assignment Scores Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Assignment Scores (Out of 100)
                        </h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Enter scores for all 12 assignments. Best 8 will be considered for internal marks calculation.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {assignments.map((score, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <label className="text-gray-700 font-medium w-8">
                                        A{index + 1}:
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={score}
                                        onChange={(e) => handleAssignmentChange(index, e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="0-100"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 mb-2">Calculation Formula:</h3>
                            <p className="text-blue-700 text-sm">
                                Internal Marks = (Average of Best 8 Assignments × 25) ÷ 100
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            onClick={calculateInternalMarks}
                            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Calculate Internal Marks
                        </button>
                        <button
                            onClick={resetForm}
                            className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                {result && (
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Internal Marks Calculation
                        </h2>

                        {/* Best Assignments Used */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                Best 8 Assignments Used (out of {result.totalAssignmentsEntered} entered):
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {result.bestAssignments.map((score, index) => (
                                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                                        <div className="text-sm text-green-600">Assignment {index + 1}</div>
                                        <div className="font-bold text-green-800">{typeof score === 'number' ? score.toFixed(1) : score}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Calculation Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700">Calculation Steps</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span>Average of Best 8:</span>
                                        <div className="text-right">
                                            <span className="font-semibold">{result.avgAssignmentScore}/100</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Weight (25%):</span>
                                        <span className="font-semibold">× 0.25</span>
                                    </div>
                                    <div className="border-t pt-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Internal Marks:</span>
                                            <span className={`text-xl font-bold ${result.isEligible ? 'text-green-600' : 'text-red-600'}`}>
                                                {result.internalMarks}/25
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Eligibility Status */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700">Eligibility Status</h3>
                                <div className={`p-4 rounded-lg ${
                                    result.isEligible ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'
                                }`}>
                                    <div className="flex items-center justify-between">
                                        <span className={`font-semibold ${result.isEligible ? 'text-green-800' : 'text-red-800'}`}>
                                            {result.isEligible ? '✅ Eligible' : '❌ Not Eligible'}
                                        </span>
                                        <span className={`text-lg font-bold ${result.isEligible ? 'text-green-800' : 'text-red-800'}`}>
                                            {result.internalMarks}/25
                                        </span>
                                    </div>
                                    <p className={`text-sm mt-2 ${result.isEligible ? 'text-green-700' : 'text-red-700'}`}>
                                        {result.isEligible 
                                            ? 'Your internal marks meet the minimum requirement (≥10/25)'
                                            : 'You need at least 10/25 in internal marks for certificate eligibility'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Internal Marks Progress</span>
                                <span>{result.internalMarks}/25</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div 
                                    className={`h-4 rounded-full transition-all duration-500 ${
                                        result.isEligible ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                                    style={{ width: `${(parseFloat(result.internalMarks) / 25) * 100}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>0</span>
                                <span className={parseFloat(result.internalMarks) >= 10 ? 'text-green-600 font-semibold' : ''}>
                                    Minimum: 10
                                </span>
                                <span>25</span>
                            </div>
                        </div>
                        {/* Theory Minimum Mark Info - Only shows when internal marks >= 10 */}
                        {result.isEligible && (
                            <div className="mt-4 sm:mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
                                    📝 Next Step: Theory Exam Requirement
                                </h3>
                                <div className="space-y-2 text-blue-700">
                                    <p className="font-semibold text-sm sm:text-base">
                                        Since your internal marks are {result.internalMarks}/25 (≥10/25), you have cleared the internal marks requirement!
                                    </p>
                                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-blue-300">
                                        <p className="font-medium mb-1 text-sm sm:text-base">To get the certificate, you also need:</p>
                                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                                            <li><strong>Theory Exam Score ≥ 30/75</strong> (40% of exam marks)</li>
                                            <li><strong>Final Combined Score ≥ 40/100</strong></li>
                                        </ul>
                                    </div>
                                    <p className="text-xs sm:text-sm italic">
                                        Both criteria must be satisfied individually to receive the certificate.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Info Section */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">About Internal Marks</h3>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                        <li>Internal marks contribute 25% to your final NPTEL score</li>
                        <li>Best 8 assignment scores out of 12 are considered</li>
                        <li>Minimum 10/25 required in internal marks for certificate eligibility</li>
                        <li>Assignments include all types: quizzes, programming, essays, etc.</li>
                        <li>Each assignment is scored out of 100</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Render the app

ReactDOM.render(<App />, document.getElementById('app'));
