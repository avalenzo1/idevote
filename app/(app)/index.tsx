import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import MemoryScripture from "@/components/MemoryScripture"

// Dummy data for the path
const lessons = [
  { id: 1, title: 'Greetings', status: 'completed' },
  { id: 2, title: 'Basic Phrases', status: 'completed' },
  { id: 3, title: 'Questions', status: 'unlocked' },
  { id: 4, title: 'Food', status: 'locked' },
  { id: 5, title: 'Travel', status: 'locked' },
];

const LessonNode = ({ title, status, onPress }) => {
  let backgroundColor = '#ddd';
  let icon = 'lock-closed';
  let iconColor = 'gray';

  if (status === 'completed') {
    backgroundColor = '#4CAF50';
    icon = 'checkmark';
    iconColor = 'white';
  } else if (status === 'unlocked') {
    backgroundColor = '#FFC107';
    icon = 'play';
    iconColor = 'white';
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={status === 'locked'}
      style={{
        backgroundColor,
        borderRadius: 50,
        padding: 20,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        alignSelf: 'center',
      }}
    >
      <Ionicons name={icon} size={40} color={iconColor} />
      <Text style={{ color: 'white', marginTop: 10 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
      {lessons.map(lesson => (
        <LessonNode
          key={lesson.id}
          title={lesson.title}
          status={lesson.status}
          onPress={() => alert(`Opening ${lesson.title}`)}
        />
      ))}

      <MemoryScripture></MemoryScripture>
    </ScrollView>
  );
}
