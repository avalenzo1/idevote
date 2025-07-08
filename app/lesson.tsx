import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native"

function lesson() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!id) {
    return (
      <View>
        <Text>No Lesson Id given.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Id: {id}</Text>
    </View>
  )
}

export default lesson