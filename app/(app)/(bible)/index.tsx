import kjv from "@/assets/bible/en/kjv_strongs.json";
import { globalStyles } from '@/constants/styles';
import { Button } from "@react-navigation/elements";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";


import hebrew from '@/assets/bible/strongs/hebrew'
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#f5f3f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#0F7173',
    flexDirection: 'row',
    padding: 10,
    gap: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    gap: 10,
    padding: 25
  },
  book: {
    fontSize: 36,
    color: '#222',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'cardo',
  },
  chapter: {
    fontSize: 36,
    color: '#222',
    fontWeight: 'bold',
    fontFamily: 'cardo',
  },
  verse: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'cardo',
  },
  verseNumber: {
    fontSize: 14,
    color: '#999',
    textAlignVertical: 'top',
    fontFamily: 'cardo',
  },
  highlight: {
    textDecorationLine: 'underline',
    textDecorationColor: 'grey',
    textDecorationStyle: 'dotted',
    borderRadius: 5,
    paddingHorizontal: 5
  },
  link: {
    color: 'white',
    padding: 10,
  }
});

const fetchChapter = (bookNumber: number, chapter: number) => {
  const verses = kjv.verses.filter(item => item.book == bookNumber && item.chapter == chapter);

  return verses;
}

const filterVerse = (verse: string) => {
  const regex = /{(.*?)}/gi;

  const replaced = verse.replaceAll(regex, (match, inside) => {
    // do something with the content inside the brackets
    return "";  // example: convert to uppercase
  });

  return replaced;
}

export default function Bible() {
  let translations = [{
    name: 'King James Version',
    abbreviation: 'KJV',
    data: kjv,

  }];

  var books = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalm',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation'
];

  let [translation, setTranslation] = useState('KJV');
  let [book, setBook] = useState(0);
  let [chapter, setChapter] = useState(0);

  let verses = fetchChapter(1, 1);

  const [highlights, setHighlight] = useState(new Set());

  const toggleHighlight = (verse: number) => {
    console.log("highlighted verse")

    if (highlights.has(verse)) {
      highlights.delete(verse);

      setHighlight(new Set(highlights));
    } else {
      setHighlight(new Set([...highlights, verse]));
    }
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: 'white' }]}>

      <View style={styles.header}>
        <Link href="/translation" style={styles.link}>
          {translation}
        </Link>
        <Link href="/books" style={styles.link}>
          {books[book]} {book + 1} <Feather name="chevron-down" size={12} color="white" />
        </Link>
        <Feather name="more-vertical" size={24} color="white" />
      </View>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.book}>Genesis</Text>

          {verses.map((verse: any, index: number) => (
            <Text key={index} style={[styles.verse, highlights.has(verse.verse) ? styles.highlight : {}]} onPress={() => toggleHighlight(verse.verse)}>
              <Text style={styles.verseNumber}>{verse.verse} </Text>
              {filterVerse(verse.text)}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}