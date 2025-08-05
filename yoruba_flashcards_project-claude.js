# Yoruba Flashcards - Complete Project Files

## Project Structure
```
yoruba-flashcards/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── data.js
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## File Contents:

### package.json
```json
{
  "name": "yoruba-flashcards",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'
})
```

### public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yoruba Flashcards - Learn Yoruba Language</title>
    <meta name="description" content="Interactive flashcards for learning Yoruba language with cultural context and grammar notes" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### src/data.js
```javascript
export const vocabData = [
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Ẹ káàárọ̀', 'english': 'Good morning', 'context': 'Used before noon as a respectful greeting.', 'notes': '"Ẹ" is a respectful prefix. "Káàárọ̀" = morning greeting.'},
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Ẹ káàsán', 'english': 'Good afternoon', 'context': 'Used between noon and 4pm.', 'notes': '"Ká + ọ̀sán" (afternoon)'},
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Ẹ káalẹ́', 'english': 'Good evening', 'context': 'Used from 4pm onward.', 'notes': '"Alẹ́" means evening.'},
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Báwo ni?', 'english': 'Hello / How are you?', 'context': 'Informal greeting among all age groups.', 'notes': '"Báwo" = how, "ni" = is'},
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Ẹ kú iṣẹ́', 'english': 'Well done', 'context': 'Shows appreciation for someone working.', 'notes': '"Kú" = greeting particle, "iṣẹ́" = work'},
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Ẹ káàbọ̀', 'english': 'Welcome', 'context': 'Used to welcome someone into a space.', 'notes': 'From "come + receive"'},
  {'day': 'Day 1', 'theme': 'Greetings & Politeness', 'yoruba': 'Ó dàbọ̀', 'english': 'Goodbye', 'context': 'Polite farewell phrase.', 'notes': 'Means "till (we) meet again"'},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Ológbò', 'english': 'Cat', 'context': 'Common domestic pet.', 'notes': 'Noun. Plural is "àwọn ológbò"'},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Ajá', 'english': 'Dog', 'context': 'Symbol of loyalty. Used for hunting.', 'notes': "Short noun with acute accent on 'a'."},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Kìnnìún', 'english': 'Lion', 'context': 'Revered in Yorubaland as the King of the Jungle', 'notes': "Sometimes spelt with one 'n', as Kìnìún"},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Adìẹ', 'english': 'Chicken', 'context': 'Used in meals and traditional rituals.', 'notes': "A Rooster would be called 'Àkùkọ'"},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Tòlótòló', 'english': 'Turkey', 'context': 'Often eaten during celebrations.', 'notes': 'A distinctive onomatopoeic word, meant to sound like the call of the Turkey'},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Ẹṣin', 'english': 'Horse', 'context': 'Historically linked to royalty and war.', 'notes': 'Singular form noun, respectful term.'},
  {'day': 'Day 2', 'theme': 'Animals', 'yoruba': 'Ẹlẹ́dẹ̀', 'english': 'Pig', 'context': 'Common livestock, avoided in some religions.', 'notes': "This descriptive name is a reflection of the animal's habits, Ẹdẹ̀ means Mud or filth"},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Bàbá', 'english': 'Father', 'context': 'Central figure in the family unit.', 'notes': 'Used across contexts; low tone start.'},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Ìyá', 'english': 'Mother', 'context': 'Culturally revered figure.', 'notes': "Ìyá can also mean 'source' metaphorically."},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Àbúrò', 'english': 'Younger sibling', 'context': 'Used regardless of gender.', 'notes': 'Implies respect for age hierarchy.'},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Ẹ̀gbọ́n', 'english': 'Older sibling', 'context': 'Shows seniority and respect.', 'notes': 'Used as a title too.'},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Ìyá àgbà', 'english': 'Grandmother', 'context': 'Often a caretaker and storyteller.', 'notes': "Ìyá bàbá mi: (my father's mother) or Ìyá ìyá mi: (my mother's mother)"},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Bàbá àgbà.', 'english': 'Grandfather', 'context': 'Figure of wisdom and tradition.', 'notes': 'Bàbá = father, Àgbà ="elder" or "old."'},
  {'day': 'Day 3', 'theme': 'Family & Relationships', 'yoruba': 'Ìyàwó', 'english': 'Wife', 'context': 'Also used as general term for bride.', 'notes': 'Used respectfully in introductions.'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́ Ajé', 'english': 'Monday', 'context': 'Literally means "day of wealth" - Considered a good day to begin business ventures and financial discussions.', 'notes': 'Believed to be the day on which the Orisa of money and wealth, Ajé, came to Earth'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́ Ìṣẹ́gun', 'english': 'Tuesday', 'context': 'Literally means "day of victory."', 'notes': 'A good day day to start anything that leads to a better life'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́rú', 'english': 'Wednesday', 'context': 'Literally means "day of confusion" or "day of calamity."', 'notes': 'Yorubas pray against evil on this day.'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́bọ', 'english': 'Thursday', 'context': 'Literally means  "day of return"', 'notes': 'Important festivals and ceremonies begin on a Thursday'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́ Ẹtì', 'english': 'Friday', 'context': 'Literally means "day of postponement"', 'notes': 'Considered an unfavorable day to start new businesses or journeys'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́ Àbámẹ́ta', 'english': 'Saturday', 'context': 'Literally means "day of three suggestions."', 'notes': 'Considered a day to be cautious, as you may get 3 bad suggestions'},
  {'day': 'Day 4', 'theme': 'Days and Time', 'yoruba': 'Ọjọ́ Àìkú', 'english': 'Sunday', 'context': 'Literally means "day of immortality."', 'notes': 'Sometimes referred to as "Ọjọ́ Ìsinmi" (day of rest)'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Ọ̀kan/Ẹyọkàn', 'english': 'One', 'context': 'A shortened form of Òkàn-lélẹ̀, which means "one and only."', 'notes': 'Also related to the verb "kàn" which means "to touch," suggesting the idea of the first thing touched or counted.'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Èjì', 'english': 'Two', 'context': 'A shortened form of Èjì-lélẹ̀, which can mean "two" or "heavy."', 'notes': 'Often used to signify a pair of things or a doubling'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Ẹ̀ta', 'english': 'Three', 'context': 'Linked to the word "tán," meaning "to finish" or "to be complete', 'notes': 'With three, a fundamental unit (like the three stones of a traditional hearth) is completed.'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Ẹ̀rin', 'english': 'Four', 'context': 'Related to the word "ìrìn," which means "walk" or "movement."', 'notes': 'Linked to the idea of a stable, four-legged structure.'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Áárùn', 'english': 'Five', 'context': 'A shortened form of Áárùnlá, which means "five', 'notes': 'Said to refer to the completion of the five fingers on one hand'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Ẹ̀fà', 'english': 'Six', 'context': '"Ẹ" =  a thing or a person, "fà" = "to pull" or "to draw."', 'notes': 'Believed to signify "pulling" another finger after a set of five.'},
  {'day': 'Day 5', 'theme': 'Numbers 1-7', 'yoruba': 'Èje', 'english': 'Seven', 'context': 'Thought to be a loan word from an older language', 'notes': 'Believed to be connected to a sacred or consecrated concept'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Pupa', 'english': 'Red', 'context': 'The root of the word, "pọn," means "to be ripe" or "to be red."', 'notes': 'In Yoruba culture, red is a powerful color symbolizing life, vitality, passion, and danger'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Búlúù', 'english': 'Blue', 'context': "A direct transliteration of 'Blue'. Also described as 'àwọ̀ sánmọ̀'", 'notes': 'Blue was often grouped with black and other dark colors under the term "dudu"'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Òfẹ̀fẹ̀/Wúrà/Yẹ́lòó', 'english': 'Yellow', 'context': 'Òfẹ̀fẹ̀ is descriptive for a specific yellow coloured bird, wúrà = gold', 'notes': 'The loan word Yẹ́lòó is used in more modern and casual contexts.'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Àwọ̀ ewé', 'english': 'Green', 'context': 'Literally translates to "the color of a leaf" or "the color of grass."', 'notes': 'Yoruba language traditionally described colors by referencing natural objects'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Dúdú', 'english': 'Black', 'context': 'The etymology is related to the concept of darkness and earth', 'notes': 'In Yoruba belief, black symbolizes maturity, wisdom, and the earth'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Funfun', 'english': 'White', 'context': '"fun" = "to be white" or "to be clean."', 'notes': 'Related to the concepts of purity, spirituality, and light.'},
  {'day': 'Day 6', 'theme': 'Colours', 'yoruba': 'Búráwùn', 'english': 'Brown', 'context': 'A direct loanword from English "brown."', 'notes': 'In traditional Yoruba, brown was not a distinct color category.'},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Orí', 'english': 'Head', 'context': 'The word implies the literal "head" as the seat of consciousness.', 'notes': "Orí refers to one's spiritual consciousness, destiny, and the personal divinity that guides one's life"},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Ojú', 'english': 'Eyes', 'context': 'Has a broader meaning of "face," "surface," or "front."', 'notes': 'Tied to the concept of sight and perception. It\'s the part of the body that "sees" and "faces" the world.'},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Imú', 'english': 'Nose', 'context': '"mú"="to grasp" or "to be sharp," which may refer to the shape or function of the nose in breathing and smelling', 'notes': 'The word is generally used in a literal sense for the body part.'},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Ẹnu', 'english': 'Mouth', 'context': 'The root is said to mean "opening," "entrance," or "edge."', 'notes': 'The etymology is tied to the function of the mouth as the opening for eating and speaking'},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Ọwọ́', 'english': 'Hand', 'context': 'lLnked to the concept of work, power, and authority.', 'notes': 'Used metaphorically to signify a person\'s capability or influence, eg "Ọwọ́ mi ló ṣe é" means "My hand did it," implying "I am the one who did it."'},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Ẹsẹ̀', 'english': 'Leg', 'context': 'Has a metaphorical meaning of "base" or "foundation."', 'notes': 'The word is often used in a more general sense to refer to the lower part of the body.'},
  {'day': 'Day 7', 'theme': 'Parts of the body', 'yoruba': 'Etí', 'english': 'Ear', 'context': 'Can also mean "edge" or "side."', 'notes': 'Often used to emphasize the importance of paying attention, as in the phrase "Fún mi l\'étí ẹ" which means "give me your ear" or "listen to me."'},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Ìrẹsì', 'english': 'Rice', 'context': 'A loan word with debatable origins', 'notes': 'The grain was not a primary staple in Yoruba culture before the 19th century'},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Iṣu', 'english': 'Yam', 'context': 'A core staple food in Yoruba culture, and the word for it is ancient.', 'notes': 'The pounded yam delicacy, Iyán, is made from iṣu'},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Èwà', 'english': 'Beans', 'context': 'A staple food used in a variety of dishes', 'notes': 'Different from the name Ẹwà often given to a female child'},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Ẹja', 'english': 'Fish', 'context': 'This word has likely been in use since the earliest forms of the language', 'notes': 'Can refer to a fish in general or specific types of fish, often with additional descriptive words'},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Ẹran', 'english': 'Meat', 'context': 'Means "meat" or "flesh."', 'notes': 'Can be used to refer to meat in general or specified by the animal it comes from'},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Omi', 'english': 'Water', 'context': 'Omi is much more than just a liquid; it is a symbol of life, purity, and spirituality', 'notes': "The word's etymology is a primary term, not a compound word"},
  {'day': 'Day 8', 'theme': 'Food Items', 'yoruba': 'Ọbẹ̀', 'english': 'Soup', 'context': 'Used as a general term for the cooked sauce that accompanies a carbohydrate meal', 'notes': 'The various types of soup are named descriptively, such as Ọbẹ̀ gbẹ̀gìrì or Ọbẹ̀ ẹgúsí'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Ìwé', 'english': 'Book', 'context': 'Derived from the verb wé, which means "to wrap" or "to fold," referencing the way documents were stored.', 'notes': 'The physical form of a "book" is a more recent introduction, as the term Ìwé has long existed to refer to a written document, a letter, or a message'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Kálámù / Gègé', 'english': 'Pen', 'context': 'Kálámù is a loanword from Arabic, while Gègé is an indigenous Yoruba word', 'notes': 'Used for any tool used for writing or marking, often referring to a stick or quill used for making marks'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Àga', 'english': 'Chair', 'context': 'A loan word, likely from Hausa or Arabic', 'notes': 'While indigenous stools and benches were common (àpótí), the word for a chair with a backrest was adopted through trade and cultural exchange.'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Tábìlì', 'english': 'Table', 'context': "Direct loanword from the English 'table'.", 'notes': 'There is no indigenous Yoruba word for a table as it was not a traditional piece of furniture.'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Olùkọ́', 'english': 'Teacher', 'context': 'Olù ="a person who does...", kọ́ = "to teach" or "to learn"', 'notes': 'A compound word with deep roots and a clear etymology'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Akẹ́kọ̀ọ́', 'english': 'Student', 'context': 'A = "a person who...", kẹ́kọ̀ọ́  = "to study" or "to learn"', 'notes': 'Another compound indigenous Yoruba word'},
  {'day': 'Day 9', 'theme': 'School/Objects', 'yoruba': 'Àpò', 'english': 'Bag', 'context': 'The primary term for a bag, sack, or pouch', 'notes': 'The word has a long history in the language and is not a compound word or loanword.'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'Jẹun', 'english': 'Eat', 'context': 'Jẹ = "to eat", oun = a shortened form of óúnjẹ, meaning "food"', 'notes': 'A compound indigenous verb'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'Sùn', 'english': 'Sleep', 'context': 'The verb "To sleep"', 'notes': 'A simple verb'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'Rìn', 'english': 'Walk', 'context': 'The verb "To walk".', 'notes': 'The word ìrìn means "a walk" or "a journey."'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'Sọ̀rọ̀', 'english': 'Talk', 'context': 'Sọ = "to speak" or "to say", ọ̀rọ̀ = "a word" or "speech"', 'notes': 'A compound indigenous verb'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'Kà', 'english': 'Read', 'context': 'The meaning of Kà is broad and includes "to count," "to read," or "to recite."', 'notes': 'Often used in the context of reading written materials, but its roots are in the act of reciting or enumerating'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'Kọ', 'english': 'Write', 'context': 'Has a broad meaning that includes "to write," "to draw," "to paint," "to build," and "to compose."', 'notes': 'Its meaning is tied to the act of creating or leaving a mark.'},
  {'day': 'Day 10', 'theme': 'Verbs/Actions', 'yoruba': 'sáré', 'english': 'Run', 'context': 'Sá = "to run" or "to flee", ré = a particle indicatingquickness or swiftness. Therefore, Sáré literally means "to run swiftly."', 'notes': 'A compound indigenous verb'},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Ayọ̀/ Aláyọ̀', 'english': 'Happiness', 'context': 'Oní = \'owner of\', Ayọ̀ = joy, happiness. So, Aláyọ̀ literally means "owner of joy."', 'notes': 'A powerful concept that is not just a passing emotion but a state of being'},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Ìbànújẹ́', 'english': 'Sadness', 'context': 'bà = to come upon, ní = to have, ojú = face, jẹ́ = to be broken or destroyed, so it literally means "to have one\'s face come to be broken or destroyed."', 'notes': 'Yorubas views sadness as a visible, physical state that is "written on the face," reflecting a person\'s inner turmoil.'},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Ìbínú', 'english': 'Angry', 'context': 'bí = to beget, to give birth to, inú = stomach, inside, mind. Bínú literally translates to "to have one\'s insides give birth."', 'notes': 'An angry person is seen as someone whose inner being is giving birth to a negative state'},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Ìbẹ̀rù', 'english': 'Fear', 'context': 'ba = "to come upon\', ẹ̀rù = "fear."', 'notes': 'ẹ̀rù bà mi is the most common way to say "I am afraid.", literally \'fear has come upon me\''},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Rẹ̀', 'english': 'Tired', 'context': 'Means to be tired, weary, or worn out', 'notes': 'Can be used to describe mental and emotional exhaustion as well as physical fatigue'},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Ìnúdídùn', 'english': 'Excited', 'context': 'Literally translates to "my inside is sweet."', 'notes': 'The use of inú (stomach/inside) as the center of emotions is a key part of Yoruba cosmology.'},
  {'day': 'Day 11', 'theme': 'Emotions', 'yoruba': 'Ìyàlẹ́nu', 'english': 'Surprised', 'context': 'yà = to be astonished,  lé = on, ẹnu = mouth. Literally means "to be astonished upon the mouth," ', 'notes': 'Yorubas like to describe abstract concepts and emotions through physical actions'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Ilé', 'english': 'House', 'context': "Ilé is more than just a physical building. It represents one's lineage, family, and home", 'notes': 'The proverb Ilé ni àbò means "home is a refuge", showing the deep significance of Ilé as a source of protection and identity.'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Ọjà', 'english': 'Market', 'context': 'Ọjà has historically been the central hub of social, economic, and political life in Yoruba communities', 'notes': 'A fundamental, indigenous Yoruba word. It is a primary noun.'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Ilé-ìwé', 'english': 'School', 'context': 'Ilé = house, ìwé = book/document. Ilé-ìwé literally means "house of books."', 'notes': 'Describes the institution by referencing its primary purpose: to house and use books.'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Ilé-ìjọsìn / Ṣọ́ọ̀ṣì', 'english': 'Church', 'context': 'Ilé = house, Ìjọsìn = worship, so "house of worship". Ṣọ́ọ̀ṣì = A loanword from the English "church."', 'notes': 'The existence of both an indigenous descriptive term and a loanword for the same concept illustrates the cultural transition that occurred with the arrival of Christianity.'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Mọ́sáláṣí', 'english': 'Mosque', 'context': 'A loanword from Arabic, masjid (mosque), which came into Yoruba via Hausa.', 'notes': 'Ilé-ìjọsìn can also be used for mosques, showing how Yoruba language initially categorized these new structures based on their function of worship before adopting specific names for each.'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Abúlé', 'english': 'Village', 'context': 'A = one who has, ilé = houses. A more literal translation would be "a place that has houses."', 'notes': 'Refers to a smaller, more rural, and often agrarian-focused settlement, reflecting a more traditional and communal way of life.'},
  {'day': 'Day 12', 'theme': 'Places', 'yoruba': 'Ìlú', 'english': 'City', 'context': 'Cities were seen as centers of political power, trade, and cultural life, governed by an Oba ', 'notes': 'A primary, indigenous Yoruba word'},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Oòrùn', 'english': 'Sun', 'context': 'Oòrùn has a dual meaning, referring to both the sun and the heat it produces.', 'notes': 'A fundamental, indigenous Yoruba word'},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Òjò', 'english': 'Rain', 'context': 'Rain is a powerful symbol of blessing and prosperity in Yoruba culture', 'notes': 'A fundamental, indigenous Yoruba word'},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Afẹ́fẹ́', 'english': 'Wind', 'context': 'Fẹ́ = "to blow," so Afẹ́fẹ́ is a descriptive word for "that which blows"', 'notes': "The wind is seen as Oya's breath and her force, capable of both gentle breezes and destructive hurricanes"},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Iná', 'english': 'Fire', 'context': 'Iná has a dual nature. It is a source of creation and warmth, but also a symbol of destruction and transformation', 'notes': 'Iná is the essence of the deity Ṣàngó, the god of thunder and lightning.'},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Omi', 'english': 'Water', 'context': 'Omi is a symbol of life, purity, and spiritual cleansing', 'notes': 'Ọmọ Omi means "child of water," often referring to a devotee of the water deities, such as Yemoja or Ọṣun'},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Ilẹ̀', 'english': 'Earth', 'context': 'Ilẹ̀ is more than just soil; it is a powerful spiritual entity, often personified as a mother figure', 'notes': 'The word is a cornerstone of Yoruba moral thought, as one must not transgress against Ilẹ̀ through evil deeds.'},
  {'day': 'Day 13', 'theme': 'Nature & Weather', 'yoruba': 'Àwọsánmà', 'english': 'Cloud', 'context': 'Àwọ̀ = skin or sheath, sánmà = sky. Àwọsánmà literally means "the skin of the sky"', 'notes': 'The clouds are seen as a covering or a sheath over the blue expanse of the sky.'},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Ẹwù', 'english': 'Shirt', 'context': 'Ẹwù can be used to refer to any type of upper body garment.', 'notes': 'Ẹwù is often a simple, loose-fitting garment worn by men and women, reflecting the practical and dignified nature of traditional clothing'},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Aṣọ/Bùbá', 'english': 'Dress', 'context': 'Aṣọ = primary term that means "cloth," "fabric," or "clothing" in general. Bùbá = a more specific term for a dress or a specific type of blouse', 'notes': 'Aṣọ holds deep cultural significance, as the fabrics used for clothing, such as Aṣọ-Òkè, are central to Yoruba identity and ceremonial life.'},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Ṣòkòtò', 'english': 'Trousers', 'context': 'A loanword from whose origin is debated', 'notes': "Some theories suggest that it's probably a term for a specific style of trousers that was associated with the people of the Sokoto region."},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Fìlà', 'english': 'Hat', 'context': 'Fìlà is a quintessential part of Yoruba male attire. It is a symbol of dignity, honor, and social status', 'notes': 'The way a man wears his Fìlà can even convey his emotions or intentions.'},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Bàtà', 'english': 'Shoes', 'context': 'A loanword, likely from Hausa or Arabic. The word was adopted as leather footwear became more common through trade', 'notes': 'Yoruba language adopted new words to describe objects that were not part of the traditional culture before external influence.'},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Agbádá', 'english': 'Male Attire', 'context': 'A loanword, likely from Hausa. Refers to a specific, flowing, large outer garment worn by men', 'notes': "A symbol of power, wealth, and prestige in Yoruba culture. The size and quality of the fabric and embroidery often indicate the wearer's social status, and it is a popular choice for formal events and ceremonies."},
  {'day': 'Day 14', 'theme': 'Clothing', 'yoruba': 'Gèlè', 'english': 'Headtie', 'context': "Gèlè is an iconic part of a Yoruba woman's ceremonial attire", 'notes': "A work of art and a symbol of elegance, dignity, and beauty. The way a Gèlè is tied, its height, and the fabric used can communicate a woman's social status, marital status, and the type of event she is attending."},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Ọkọ̀ ayọ́kẹ́lẹ́/ Mọ́tò', 'english': 'Car', 'context': 'Ọkọ̀ = vehicle, ayọ́kẹ́lẹ́ = descriptive term for "the one that moves smoothly and silently". The phrase literally means "the vehicle that moves smoothly."', 'notes': 'Before the introduction of cars, the Yoruba language had no word for a self-propelled vehicle. The words were adopted as the objects became a common sight'},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Kẹ̀kẹ́', 'english': 'Bicycle', 'context': "An onomatopoeia, imitating the sound of the bicycle's movement or the jingling of its bell.", 'notes': 'An example of how the Yoruba language names new objects based on their most prominent characteristic'},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Ọkọ̀ òfurufú', 'english': 'Airplane', 'context': 'Òkọ̀ = vehicle/boat) and òfurufú (sky or air). It literally means "sky vehicle."', 'notes': 'A descriptive term coined by combining two existing concepts: a vehicle and the sky.'},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Ọkọ̀ ojú omi', 'english': 'Boat', 'context': 'Ọkọ̀ = vehicle, ojú = face or surface, and omi = water. The phrase literally translates to "vehicle on the surface of the water"', 'notes': 'Ọkọ̀ is a foundational term that can be used to refer to a canoe, boat, ship, or even a vehicle in general.'},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Ojú-ọ̀nà', 'english': 'Road', 'context': 'Ojú = face or surface, ọ̀nà = path or way. It literally means "the face of the path"', 'notes': "Can hold deep cultural significance as not just a physical path but a metaphor for one's life's journey or destiny."},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Bọ́ọ̀sì / Ọkọ̀ ìrìnàjò', 'english': 'Bus', 'context': 'Ọkọ̀ = vehicle, ìrìnàjò = journey', 'notes': 'Bọ́ọ̀sì is more common in urban, fast-paced environments, while Ọkọ̀ ìrìnàjò might be used in more formal or traditional contexts.'},
  {'day': 'Day 15', 'theme': 'Transportation', 'yoruba': 'Alùpùpù / Kẹ̀kẹ́ alágbárá', 'english': 'Motorcycle', 'context': 'Alùpùpù is a descriptive, onomatopoeic word imitating the sound of the engine. Kẹ̀kẹ́ alágbárá is a descriptive compound word from Kẹ̀kẹ́ (bicycle) and alágbárá (powerful), meaning "powerful bicycle."', 'notes': 'Yoruba language has an amazing ability to turn sounds into words.'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Ẹ̀jọ', 'english': 'Eight', 'context': 'A contraction of "Ẹwàá-ò-fún-méjì," which means "ten is not to be given two", resulting in eight', 'notes': 'Yoruba uses a vigesimal (base-20) numerical system. This subtractive method is a core and unique feature of the Yoruba language.'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Ẹ̀sán', 'english': 'Nine', 'context': 'A contraction of Ẹwàá-ò-fún-mọ́kàn," which means "ten is not to be given one", resulting in nine.', 'notes': 'Yoruba uses a vigesimal (base-20) numerical system. This subtractive method is a core and unique feature of the Yoruba language.'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Ẹwàá', 'english': 'Ten', 'context': 'Ẹwàá is a primary term for ten', 'notes': 'The number ten represents the completion of a set (such as the fingers on two hands), which is seen as a state of wholeness and perfection'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Mọ́kànlá', 'english': 'Eleven', 'context': 'Mọ́kàn-lé- (Mẹ́ + ọ̀kan + lé) + ẹ̀wá (ten), meaning "one on top of ten."', 'notes': 'Numbers are not counted linearly from 1 to 20. Instead, they are referenced in relation to key benchmark numbers 5, 10, 15 and 20'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Mẹ́jìlá', 'english': 'Twelve', 'context': 'Mẹ́jì-lé- (Mẹ́ + èjì + lé) + ẹ̀wá, meaning "two on top of ten."', 'notes': 'The choice between addition and subtraction depends on which benchmark the number is closest to'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Mẹ́tàlá', 'english': 'Thirteen', 'context': 'Mẹ́tà-lé- (Mẹ́ + ẹ̀ta + lé) + ẹ̀wá, meaning "three on top of ten."', 'notes': 'Numbers between benchmarks are formed by adding to the previous benchmark, while numbers just before a benchmark are formed by subtracting from it'},
  {'day': 'Day 16', 'theme': 'Numbers 8-14', 'yoruba': 'Mẹ́rìnlá', 'english': 'Fourteen', 'context': 'Mẹ́rìn-lé- (Mẹ́ + ẹ̀rin + lé) + ẹ̀wá, meaning "four on top of ten."', 'notes': 'Numbers like 8, 9, 18, and 19 are formed by subtracting from the next highest number (10 or 20)'},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Jọ̀ọ́/Jọ̀wọ́', 'english': 'Please', 'context': 'Jọ = to be kind/to be pleasant,  ọwọ́ = hand. It literally means "please be kind with your hands. Jọ̀ọ́ is a contraction of Jọ̀wọ́', 'notes': 'A formal and respectful way of saying "please." It can also be used as a standalone word to get someone\'s attention'},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Ẹ ṣé/Ẹ ṣéun', 'english': 'Thank you', 'context': 'Translates to "you have done it well" It is a modern form of the phrase Ẹ kú iṣẹ́, which means "thank you for your work."', 'notes': 'These ways of saying "thank you" in Yoruba reflect the cultural emphasis on acknowledging a person\'s efforts.'},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Má bínú', 'english': 'Sorry', 'context': 'Má = do not, and bínú = be angry. So literally, do not be angry.', 'notes': "In Yoruba, the concept of an apology is often centered on assuaging the other person's feelings rather than just admitting fault."},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Ẹ darí jì mí', 'english': 'Excuse me', 'context': 'Translates to "forgive me." It is formed from Ẹ (you), darí jì (to forgive), and mí (me).', 'notes': 'A direct translation for "excuse me" doesn\'t exist, this phrase is used to ask for forgiveness when you have caused a minor inconvenience. A less formal way of getting attention is simply using Jọ̀wọ́.'},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Bẹ́ẹ̀ni', 'english': 'Yes', 'context': 'Meaning "it is so".', 'notes': 'Bẹ́ẹ̀ni is the formal and definitive way of saying "yes." In casual conversation, a quick nod is often used.'},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Rárá/Bẹ́ẹ̀kọ́', 'english': 'No', 'context': 'Bẹ́ẹ̀kọ́ means "it is not so\'.', 'notes': 'Bẹ́ẹ̀kọ́ is a clear and direct way of saying "no." Rárá is used for a stronger negative'},
  {'day': 'Day 17', 'theme': 'Common phrases', 'yoruba': 'Kò yé mi', 'english': "I don't understand", 'context': 'Kò = a negative particle, yé = to be clear or intelligible, mi = me. It literally means "It is not clear to me"', 'notes': "Kò yé mi is a direct and explicit statement that the subject matter itself is not clear, but Mi ò gbọ́ (I didn't hear) is another common way to express a lack of comprehension"},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Ta nìyẹn?', 'english': 'Who is that', 'context': 'A direct interrogative phrase. It is formed from Ta = who, ni = is, and yẹn = that, referring to a person or thing at a slight distance.', 'notes': 'A common way to inquire about a person whose identity is unknown. The word yẹn places the person at a specific distance, and the question is often asked in a neutral tone.'},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Fún mi / Gbé fún mi', 'english': 'Give it to me', 'context': 'Fún (give), mi (me) is used when the object is easily accessible and does not need to be lifted. Gbé fún mi is a more specific command that literally means "Lift it and give it to me."', 'notes': 'The choice depends on the context of the object being requested. Gbé fún mi is often the more common phrase in everyday interactions, as it is used for a variety of objects that need to be handed over'},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Mo ti dé', 'english': 'I have arrived', 'context': 'A simple statement formed from Mo (I) and the verb dé (to arrive), with ti adding a sense of completion', 'notes': "A way of announcing one's presence"},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Tèmi ni', 'english': "It's mine", 'context': 'A combination of Ti = of, belonging to, èmi = the long form of the first-person singular pronoun "me", and ni = is. It literally means "It is of me."', 'notes': 'A common way to assert ownership. The possessive pronoun Tèmi can also be used on its own, for example, ìwé tèmi/ ("my book").'},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Tìrẹ ni', 'english': "It's yours", 'context': 'A combination of Ti = of, belonging to, ìwọ = the long form of the second-person singular pronoun "you", and ni = is. It literally means "It is of you."', 'notes': 'The Yoruba language distinguishes between a singular "you" and a plural/formal "you." Tìrẹ ni is for a single person, while the possessive phrase for a plural "you" is Tìyín ni, which comes from Ti and Ẹyin ("you" plural).'},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Tìwa ni', 'english': "It's ours", 'context': 'A combination of Ti = of, belonging to, àwa = the long form of the first-person plural pronoun "we", and n i= is. It literally means "It is of us."', 'notes': 'Used to express collective ownership. The possessive pronoun Tìwa can also be used as a standalone word, as in Ilé Tìwa/ Ilé wa ("our house").'},
  {'day': 'Day 18', 'theme': 'More common phrases', 'yoruba': 'Padà wá', 'english': 'Come back', 'context': 'A direct command. It is composed of the verb Padà = to return or to go back and the verb wá = to come', 'notes': 'While Wá just means "come," Padà wá is a command to return to a place you have previously left. This contrasts with Padà lọ ("go back"), which is a command to return to a different location.'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Ṣíbí', 'english': 'Spoon', 'context': 'A loanword, likely adapted from a foreign language through trade', 'notes': 'The use of Sibi in Yoruba homes reflects a shift from traditional eating habits, where hands were the primary utensil.'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Ìkòkò', 'english': 'Pot', 'context': 'Ìkòkò is a foundational kitchen item, used for cooking and storing water', 'notes': 'It is a symbol of domesticity and sustenance.'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Àwo', 'english': 'Plate', 'context': 'A primary, indigenous Yoruba word.', 'notes': 'Can refer to flat plates or actual bowls. In modern terms, usually refers to heavy, breakable ceramic plates/bowls'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Ife', 'english': 'Cup', 'context': 'A primary, indigenous Yoruba word', 'notes': 'Can refer to a cup or a mug'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Ibùsùn', 'english': 'Bed', 'context': 'Literally means "the place to lie down to sleep."', 'notes': 'Traditionally, Ení (mats) were the primary form of bedding. The word Ìbùsùn is a more general term that now encompasses the modern bed.'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Ení', 'english': 'Mat', 'context': 'A primary, indigenous Yoruba word.', 'notes': 'The Ení (mat) is a deeply significant item. It is not just for sleeping but also for sitting, socializing, and praying. It is a symbol of community and simplicity.'},
  {'day': 'Day 19', 'theme': 'Household Items', 'yoruba': 'Ìgbálẹ̀', 'english': 'Broom', 'context': 'Ì = prefix for nouns, the verb gbá = to sweep, ilẹ̀ = the ground. It literally means "the instrument for sweeping the ground."', 'notes': 'The Ìgbálẹ̀ (broom) is a symbol of cleanliness and order in the home. It is a foundational domestic item'},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Òríkì', 'english': 'Praise Poetry', 'context': 'Literally means "to salute the head" or "to praise one\'s destiny."', 'notes': "It is a fundamental part of the language and a key to understanding a person's identity and lineage"},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Ìlù', 'english': 'Drum', 'context': 'A primary, indigenous Yoruba word.', 'notes': 'In Yoruba land, drums are also a means of communication and a sacred ritual object. Different drum rhythms convey specific messages or summon deities.'},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Aṣọ ìbílẹ̀', 'english': 'Traditional Outfit', 'context': 'A powerful symbol of Yoruba identity. ', 'notes': 'The term refers to all traditional attire, including  Ìró àti Bùbá and Agbádá, and is a source of great pride.'},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Àṣẹ', 'english': 'Command/Authority', 'context': 'A powerful, untranslatable concept in Yoruba', 'notes': 'It refers to the spiritual power and authority to make things happen. It is used to bless or to invoke the power of the universe. When someone says Àṣẹ, it means "so be it."'},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Ilà', 'english': 'Tribal Marks', 'context': 'The noun Ilà is derived from the verb là, which means "to cut," "to incise," or "to mark." The word, therefore, directly refers to the mark or incision on the skin.', 'notes': 'It was a form of identity. However, its use has largely faded in modern times due to a shift in cultural values and the rise of formal identification systems.'},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Ẹ̀yà', 'english': 'Tribe', 'context': 'Refers to a tribe or a group with a common ancestry', 'notes': 'The word is used to describe a sense of collective identity and shared heritage.'},
  {'day': 'Day 20', 'theme': 'Yoruba Culture Words', 'yoruba': 'Òkèlè', 'english': 'Swallow meal', 'context': 'Ọkẹ̀lẹ́ is the specific term for the portion of a swallow food (like Àmàlà or Ìyàn) that is broken off and rolled into a ball with the fingers before being dipped in soup', 'notes': "The practice of using one's fingers to mold the portion and scoop up the ọbẹ̀ (stew) is an integral part of the meal, connecting the eater to the food in a direct and tactile way."},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': "Ìwà l'ẹwà", 'english': 'Character is beauty', 'context': "A simple, direct statement composed of two primary Yoruba words: Ìwà = character, behavior, l'ẹwà = is beauty, which is a contraction of ni ẹwà", 'notes': 'Good character and inner qualities are more valuable than physical appearance.'},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': 'Bí ọmọdé bá mọ́wọ́ wẹ̀, yóò bá àgbà jẹun', 'english': 'If a child knows how to wash their hands, they will eat with the elders.', 'context': 'A conditional statement. Bí ọmọdé = "if a child," mọ́wọ́ = "to know one\'s hands" or "to be clean," and wẹ̀ = "to wash." Yóò bá àgbà jẹun = "they will eat with the elders."', 'notes': 'If you are well-behaved, respectful, and understand your place, you will be invited into the company of important people'},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': 'Ọmọdé tó ń kọ́ bàbá rẹ̀ lẹ́kọ̀ọ́ kò mọ̀ pé ọgbọ́n ni', 'english': 'The child who teaches their father a lesson does not know that it is wisdom.', 'context': 'Ọmọdé = "child," bàbá = "father," kọ́ lẹ́kọ̀ọ́ = "to teach a lesson," and ọgbọ́n = "wisdom."', 'notes': "A young person who believes they are smarter than an elder does not realize that the elder's wisdom is superior and comes from years of experience."},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': "Ọmọdé ó ń l'akisa tó àgbà", 'english': 'A child can never have as many rags as an elder', 'context': "The juxtaposition of a child, who represents potential but lacks wisdom, and an elder, who may be poor (l'akisa) but possesses a wealth of knowledge, powerfully conveys the Yoruba value system, where age and wisdom are held in the highest regard.", 'notes': "The wisdom and experience of an elder are more valuable than the material wealth or youth of a child. It is a proverb that emphasizes the importance of respecting one's elders."},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': 'Afẹ́fẹ́ tí fẹ́, a ti rí fùrọ̀ adìẹ', 'english': 'The wind has blown, and we have seen the anus of the chicken.', 'context': 'A secret has been exposed, or the truth has been revealed.', 'notes': 'A chicken\'s anus is a part of the animal that is not typically seen, so its exposure symbolizes the revelation of a secret. The proverb is a way of saying "the truth is out now."'},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': "Igi gogoro má gún mi l'ójú, àti ọ̀kẹ̀rè la ti ń wò", 'english': 'May a tall tree that we have been watching it from afar not poke me in the eye', 'context': 'The "tall tree" is a metaphor for a big and potentially dangerous problem, and "poking me in the eye" is a metaphor for an unexpected and painful consequence.', 'notes': 'May I not suffer from a problem that I have been observing and trying to avoid from a safe distance. It is a proverb about foresight and the hope that caution will prevent harm.'},
  {'day': 'Day 21', 'theme': 'Common Proverbs and Idioms', 'yoruba': 'Kòkòrò tó ń jẹ ẹ̀fọ́, ara ẹ̀fọ́ ló wà', 'english': 'The insect that eats the vegetable is within the vegetable itself', 'context': 'A proverb of caution that emphasizes the importance of vigilance against those who are close.', 'notes': "The source of a problem or a person's downfall often comes from within. The proverb is a warning about internal betrayal or self-destruction."}
];
```

### src/App.jsx
```javascript
import { useState } from 'react'
import { vocabData } from './data'

export default function App() {
  const [dayIndex, setDayIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const dayCards = vocabData.filter(card => card.day === `Day ${dayIndex + 1}`)
  const card = dayCards[cardIndex] || {}

  const handlePrevious = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1)
      setShowAnswer(false)
    }
  }

  const handleNext = () => {
    if (cardIndex < dayCards.length - 1) {
      setCardIndex(cardIndex + 1)
      setShowAnswer(false)
    }
  }

  const handleDayChange = (dayIdx) => {
    setDayIndex(dayIdx)
    setCardIndex(0)
    setShowAnswer(false)
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2d4a5a', marginBottom: '2rem' }}>📚 Yoruba Flashcards</h1>
      
      {/* Day selector buttons */}
      <div style={{ margin: '1rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
        {Array.from({ length: 21 }, (_, i) => (
          <button
            key={i}
            onClick={() => handleDayChange(i)}
            style={{ 
              margin: '0.2rem', 
              padding: '0.5rem 0.8rem', 
              backgroundColor: i === dayIndex ? '#2d4a5a' : '#e2e8f0', 
              color: i === dayIndex ? '#fff' : '#2d4a5a', 
              border: 'none', 
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: i === dayIndex ? 'bold' : 'normal',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (i !== dayIndex) {
                e.target.style.backgroundColor = '#cbd5e0'
              }
            }}
            onMouseLeave={(e) => {
              if (i !== dayIndex) {
                e.target.style.backgroundColor = '#e2e8f0'
              }
            }}
          >
            Day {i + 1}
          </button>
        ))}
      </div>

      {/* Current day info */}
      <div style={{ margin: '1rem 0', color: '#666' }}>
        <p><strong>Day {dayIndex + 1}</strong> - {dayCards.length > 0 ? dayCards[0].theme : 'No cards available'}</p>
        <p>Card {cardIndex + 1} of {dayCards.length}</p>
      </div>

      {/* Flashcard */}
      {dayCards.length > 0 ? (
        <div style={{ 
          backgroundColor: '#fdf2f8', 
          padding: '3rem 2rem', 
          margin: '2rem auto', 
          borderRadius: '1rem', 
          maxWidth: '500px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fce7f3'
        }}>
          <h2 style={{ fontSize: '2rem', color: '#2d4a5a', margin: '0 0 1rem 0' }}>{card.yoruba}</h2>
          <button 
            onClick={() => setShowAnswer(!showAnswer)}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: showAnswer ? '#10b981' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
            }}
          >
            {showAnswer ? card.english : 'Click to reveal'}
          </button>
        </div>
      ) : (
        <div style={{ 
          backgroundColor: '#fef2f2', 
          padding: '2rem', 
          margin: '2rem auto', 
          borderRadius: '1rem', 
          maxWidth: '500px',
          border: '2px solid #fecaca'
        }}>
          <p style={{ color: '#dc2626' }}>No cards available for this day yet.</p>
        </div>
      )}

      {/* Detailed information */}
      {showAnswer && card.english && (
        <div style={{ 
          maxWidth: '600px', 
          margin: '1rem auto', 
          textAlign: 'left',
          backgroundColor: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2d4a5a' }}>English:</strong> 
            <span style={{ marginLeft: '0.5rem' }}>{card.english}</span>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2d4a5a' }}>Cultural Context:</strong> 
            <span style={{ marginLeft: '0.5rem' }}>{card.context}</span>
          </div>
          <div>
            <strong style={{ color: '#2d4a5a' }}>Grammar Notes:</strong> 
            <span style={{ marginLeft: '0.5rem' }}>{card.notes}</span>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={handlePrevious}
          disabled={cardIndex === 0}
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: cardIndex === 0 ? '#d1d5db' : '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: cardIndex === 0 ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          ⬅️ Previous
        </button>
        
        <button 
          onClick={() => setShowAnswer(true)}
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          🔊 Listen
        </button>
        
        <button 
          onClick={handleNext}
          disabled={cardIndex >= dayCards.length - 1}
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: cardIndex >= dayCards.length - 1 ? '#d1d5db' : '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: cardIndex >= dayCards.length - 1 ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          Next ➡️
        </button>
      </div>

      {/* Progress indicator */}
      {dayCards.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <div style={{ 
            backgroundColor: '#e5e7eb', 
            height: '8px', 
            borderRadius: '4px', 
            overflow: 'hidden',
            maxWidth: '300px',
            margin: '0 auto'
          }}>
            <div style={{ 
              backgroundColor: '#10b981', 
              height: '100%', 
              width: `${((cardIndex + 1) / dayCards.length) * 100}%`,
              transition: 'width 0.3s ease'
            }} />
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
            Progress: {cardIndex + 1} / {dayCards.length}
          </p>
        </div>
      )}
    </div>
  )
}
```

### README.md
```markdown
# Yoruba Flashcards

An interactive web application for learning the Yoruba language through flashcards, featuring 21 themed days with 147 vocabulary cards covering cultural context and grammar notes.

## Features

- 21 themed learning days (Greetings, Animals, Family, Colors, Numbers, etc.)
- 147 vocabulary cards with proper Yoruba tone markings
- Cultural context and etymology for each word
- Grammar notes and linguistic information
- Progress tracking per day
- Responsive design
- Clean, intuitive interface

## Themes Covered

1. **Day 1**: Greetings & Politeness
2. **Day 2**: Animals
3. **Day 3**: Family & Relationships
4. **Day 4**: Days and Time
5. **Day 5**: Numbers 1-7
6. **Day 6**: Colours
7. **Day 7**: Parts of the body
8. **Day 8**: Food Items
9. **Day 9**: School/Objects
10. **Day 10**: Verbs/Actions
11. **Day 11**: Emotions
12. **Day 12**: Places
13. **Day 13**: Nature & Weather
14. **Day 14**: Clothing
15. **Day 15**: Transportation
16. **Day 16**: Numbers 8-14
17. **Day 17**: Common phrases
18. **Day 18**: More common phrases
19. **Day 19**: Household Items
20. **Day 20**: Yoruba Culture Words
21. **Day 21**: Common Proverbs and Idioms

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yoruba-flashcards.git
cd yoruba-flashcards
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Deployment

This app is optimized for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages

## Usage

1. Select a day from the day selector buttons
2. Navigate through cards using Previous/Next buttons
3. Click "Click to reveal" to see the English translation
4. View detailed cultural context and grammar notes
5. Track your progress with the progress indicator

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Vocabulary data compiled from various Yoruba language resources
- Cultural context and etymology notes provided by Yoruba language experts
- Built with React and Vite for optimal performance
```

### .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## Instructions for GitHub Upload

1. **Create a new repository on GitHub** named `yoruba-flashcards`
2. **Download and extract** the files from this artifact
3. **Initialize git** in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yoruba Flashcards app with 21 days of vocabulary"
   ```
4. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/yoruba-flashcards.git
   git branch -M main
   git push -u origin main
   ```
5. **Deploy to Vercel**:
   - Connect your GitHub repo to Vercel
   - Vercel will automatically detect it's a Vite project
   - Deploy with default settings

The complete project structure is ready for GitHub and deployment!