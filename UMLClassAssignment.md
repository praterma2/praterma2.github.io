```mermaid
classDiagram
%%classes in my dissertation

class JetsonNano{
    String camType
    int amountOfMemory
    String location
    recordPict()
    locateWristElbowShoulder()
    determineElbowAngle()
}

class wtRecorder{
    int currDistanceToGround
    int zeroPointDistance
    int distanceChange
    detDistanceChange()
    recordDistanceChange()
    stopRecording()
    startRecording()
}