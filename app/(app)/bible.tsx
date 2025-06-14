import kjv from "@/assets/bible/en/kjv_strongs.json";
import { globalStyles } from '@/constants/styles';
import { Button } from "@react-navigation/elements";
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#f5f3f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ccecec',
    flexDirection: 'row',
    gap: 5,
    width: '100%',
    justifyContent: 'space-between'
  },
  box: {
    flex: 1,
    gap: 10,
    padding: 15
  },
  text: {
    fontSize: 18
  }
});

const fetchChapter = (bookNumber: number, chapter: number) => {
  const verses = kjv.verses.filter(item => item.book == bookNumber && item.chapter == chapter);

  return verses;
}

export default function Bible() {
  let verses = fetchChapter(1, 1);

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Button>KJV</Button>
        <Button>Genesis</Button>
        <Button>1</Button>
      </View>
      <ScrollView>
        <View style={styles.box}>
          {verses.map((verse: any, index: number) => (
            <Text key={index} style={styles.text}>
              {verse.verse}
              {verse.text}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}