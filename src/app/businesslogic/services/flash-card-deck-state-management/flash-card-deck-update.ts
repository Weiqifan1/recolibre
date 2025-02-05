

import { FlashCardDeck } from '../../models/flashcarddeck'; // Update the path as per your application structure


export class FlashCardDeckUpdate {
  public static editDeckName(deckName: string,
                      currentState: FlashCardDeck): FlashCardDeck {
    // Construct a new FlashCardDeck object with the updated name, using the rest of the properties from currentState
    const updatedDeck: FlashCardDeck = {
      ...currentState, // Spread the existing properties of the current state
      deckName: deckName, // Override the `deckName` field with the new value
    };

    return updatedDeck; // Return the updated object
  }

  public static createNewDeck(newDeckContent: string): FlashCardDeck {


    return {
      deckName: 'New Deck',
      deckInfo: 'This is a new flashcard deck.',
      settings: {}, // Provide a default empty settings object
      tags: {}, // Provide a default empty tags object
      cards: [] // Initialize with an empty array of FlashCards
    };



  }

}
