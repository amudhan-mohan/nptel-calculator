const { useState } = React;

// Lucide Icons
const CalculatorIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('rect', { key: '1', x: '4', y: '2', width: '16', height: '20', rx: '2' }),
  React.createElement('line', { key: '2', x1: '8', y1: '6', x2: '16', y2: '6' }),
  React.createElement('line', { key: '3', x1: '8', y1: '10', x2: '16', y2: '10' }),
  React.createElement('line', { key: '4', x1: '8', y1: '14', x2: '16', y2: '14' }),
  React.createElement('line', { key: '5', x1: '8', y1: '18', x2: '16', y2: '18' }),
  React.createElement('line', { key: '6', x1: '12', y1: '6', x2: '12', y2: '18' })
]);

const ClipboardListIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('rect', { key: '1', x: '8', y: '2', width: '8', height: '4', rx: '1', ry: '1' }),
  React.createElement('path', { key: '2', d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }),
  React.createElement('path', { key: '3', d: 'M12 11h4' }),
  React.createElement('path', { key: '4', d: 'M12 16h4' }),
  React.createElement('path', { key: '5', d: 'M8 11h.01' }),
  React.createElement('path', { key: '6', d: 'M8 16h.01' })
]);

const CheckCircleIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: '1', d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
  React.createElement('polyline', { key: '2', points: '22,4 12,14.01 9,11.01' })
]);

const XCircleIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: '1', cx: '12', cy: '12', r: '10' }),
  React.createElement('line', { key: '2', x1: '15', y1: '9', x2: '9', y2: '15' }),
  React.createElement('line', { key: '3', x1: '9', y1: '9', x2: '15', y2: '15' })
]);

const AwardIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: '1', cx: '12', cy: '8', r: '6' }),
  React.createElement('path', { key: '2', d: 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11' })
]);

const InfoIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: '1', cx: '12', cy: '12', r: '10' }),
  React.createElement('line', { key: '2', x1: '12', y1: '16', x2: '12', y2: '12' }),
  React.createElement('line', { key: '3', x1: '12', y1: '8', x2: '12.01', y2: '8' })
]);

const FileTextIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: '1', d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }),
  React.createElement('polyline', { key: '2', points: '14,2 14,8 20,8' }),
  React.createElement('line', { key: '3', x1: '16', y1: '13', x2: '8', y2: '13' }),
  React.createElement('line', { key: '4', x1: '16', y1: '17', x2: '8', y2: '17' }),
  React.createElement('line', { key: '5', x1: '10', y1: '9', x2: '8', y2: '9' })
]);

const RotateCcwIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: '1', d: 'M3 2v6h6' }),
  React.createElement('path', { key: '2', d: 'M21 12A9 9 0 0 0 6 5.3L3 8' }),
  React.createElement('path', { key: '3', d: 'M21 22v-6h-6' }),
  React.createElement('path', { key: '4', d: 'M3 12a9 9 0 0 0 15 6.7l3-2.7' })
]);

const BarChartIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('line', { key: '1', x1: '12', y1: '20', x2: '12', y2: '10' }),
  React.createElement('line', { key: '2', x1: '18', y1: '20', x2: '18', y2: '4' }),
  React.createElement('line', { key: '3', x1: '6', y1: '20', x2: '6', y2: '16' })
]);

const TrophyIcon = () => React.createElement('svg', {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: '1', d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }),
  React.createElement('path', { key: '2', d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }),
  React.createElement('path', { key: '3', d: 'M4 22h16' }),
  React.createElement('path', { key: '4', d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' }),
  React.createElement('path', { key: '5', d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' }),
  React.createElement('path', { key: '6', d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z' })
]);

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
                        <div className="flex items-center mb-4">
                            <ClipboardListIcon />
                            <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">Assignment Scores (Out of 100)</h2>
                        </div>
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
                            <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                                <FileTextIcon className="mr-2" />
                                Calculation Formula:
                            </h3>
                            <p className="text-blue-700 text-sm">
                                Internal Marks = (Average of Best 8 Assignments × 25) ÷ 100
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            onClick={calculateInternalMarks}
                            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                            <CalculatorIcon className="mr-2" />
                            Calculate Internal Marks
                        </button>
                        <button
                            onClick={resetForm}
                            className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center"
                        >
                            <RotateCcwIcon className="mr-2" />
                            Reset
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                {result && (
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="flex items-center justify-center mb-6">
                            <BarChartIcon />
                            <h2 className="text-2xl font-semibold text-gray-800 ml-2">
                                Internal Marks Calculation
                            </h2>
                        </div>

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
                                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                                    <CalculatorIcon className="mr-2" />
                                    Calculation Steps
                                </h3>
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
                                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                                    <AwardIcon className="mr-2" />
                                    Eligibility Status
                                </h3>
                                <div className={`p-4 rounded-lg ${
                                    result.isEligible ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'
                                }`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
						{result.isEligible ? (
							<CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
						) : (
							<XCircleIcon className="w-5 h-5 text-red-600 mr-2" />
						)}
						<span className={`font-semibold ${result.isEligible ? 'text-green-800' : 'text-red-800'}`}>
							{result.isEligible ? 'Eligible' : 'Not Eligible'}
						</span>
					</div>

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
                            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                                    <FileTextIcon className="mr-2" />
                                    Next Step: Theory Exam Requirement
                                </h3>
                                <div className="space-y-2 text-blue-700">
                                    <p className="font-semibold">
                                        Since your internal marks are {result.internalMarks}/25 (≥10/25), you have cleared the internal marks requirement!
                                    </p>
                                    <div className="bg-white rounded-lg p-3 border border-blue-300">
                                        <p className="font-medium mb-1">To get the certificate, you also need:</p>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li><strong>Theory Exam Score ≥ 30/75</strong> (40% of exam marks)</li>
                                            <li><strong>Final Combined Score ≥ 40/100</strong></li>
                                        </ul>
                                    </div>
                                    <p className="text-sm italic">
                                        Both criteria must be satisfied individually to receive the certificate.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Certificate Criteria - Only shows when eligible */}
                        {result.isEligible && (
                            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                                    <TrophyIcon className="mr-2" />
                                    Certificate Criteria Based on Final Score
                                </h3>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-3 text-center">
                                            <div className="font-bold text-yellow-900 text-sm">≥ 90</div>
                                            <div className="font-semibold text-yellow-800">Elite + Gold</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg p-3 text-center">
                                            <div className="font-bold text-gray-700 text-sm">75 - 89</div>
                                            <div className="font-semibold text-gray-600">Elite + Silver</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-blue-400 to-blue-200 rounded-lg p-3 text-center">
                                            <div className="font-bold text-blue-900 text-sm">≥ 60</div>
                                            <div className="font-semibold text-blue-800">Elite</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-green-400 to-green-200 rounded-lg p-3 text-center">
                                            <div className="font-bold text-green-900 text-sm">40 - 59</div>
                                            <div className="font-semibold text-green-800">Successfully Completed</div>
                                        </div>
                                    </div>
                                    <p className="text-purple-700 text-sm italic text-center">
                                        Note: Final Score = Internal Marks (25%) + Theory Exam (75%)
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Info Section */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                        <InfoIcon className="mr-2" />
                        About Internal Marks
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                        <li>Internal marks contribute 25% to your final NPTEL score</li>
                        <li>Best 8 assignment scores out of 12 are considered</li>
                        <li>Minimum 10/25 required in internal marks for certificate eligibility</li>
                        <li>Assignments include all types: quizzes, programming, essays, etc.</li>
                        <li>Each assignment is scored out of 100</li>
                        <li><strong>Certificate requires both: Internal Marks ≥10/25 and Theory Exam ≥30/75</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('app'));