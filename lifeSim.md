
```mermaid
classDiagram
Clothes <|-- Pants
Clothes <|-- Top
Clothes <|-- Shoes
class Mood{
    String type
    int durationMin
    changeMood(String prevMood String newMood)
}
class Clothes{
    String color
    float ageYears
    remove()
    putOn()
}
