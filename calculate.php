<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    $assignments = $input['assignments'] ?? [];
    
    // Filter out zero values (empty inputs)
    $validAssignments = array_filter($assignments, function($score) {
        return $score > 0;
    });
    
    // Validate inputs
    if (count($validAssignments) < 8) {
        echo json_encode(['error' => 'At least 8 assignment scores are required']);
        exit;
    }
    
    // Convert to float and sort descending
    $validAssignments = array_map('floatval', $validAssignments);
    rsort($validAssignments);
    $bestAssignments = array_slice($validAssignments, 0, 8);
    
    // Calculate internal marks
    $avgAssignmentScore = array_sum($bestAssignments) / 8;
    $internalMarks = ($avgAssignmentScore * 25) / 100;
    $isEligible = $internalMarks >= 10;
    
    // Prepare response
    $response = [
        'bestAssignments' => $bestAssignments,
        'avgAssignmentScore' => round($avgAssignmentScore, 2),
        'internalMarks' => round($internalMarks, 2),
        'isEligible' => $isEligible,
        'totalAssignmentsEntered' => count($validAssignments)
    ];
    
    echo json_encode($response);
} else {
    echo json_encode(['error' => 'Method not allowed. Use POST.']);
}
?>