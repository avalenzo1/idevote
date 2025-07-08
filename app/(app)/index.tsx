import { Feather } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter, useFocusEffect, Link } from 'expo-router';
import * as Haptics from 'expo-haptics';
import MemoryScripture from '@/components/MemoryScripture';
import Popover from 'react-native-popover-view';
import { globalStyles } from '@/constants/styles';

const lessons = [
  { id: 1, title: 'Introduction', status: 'completed' },
  { id: 2, title: 'Bible Study', status: 'completed' },
  { id: 3, title: 'Discussion', status: 'completed' },
  { id: 4, title: 'Share The Word', status: 'completed' },
  { id: 5, title: 'Memory Scripture', status: 'unlocked' },
];

type LessonNodeProps = {
  title: string;
  status: string;
  onFocus: () => void;
};

const LessonNode = ({ title, status, onFocus, ref }: LessonNodeProps) => {
  let backgroundColor = '#ddd';
  let icon = 'lock';
  let iconColor = 'gray';

  if (status === 'completed') {
    backgroundColor = '#4CAF50';
    icon = 'check';
    iconColor = 'white';
  } else if (status === 'unlocked') {
    backgroundColor = '#FFC107';
    icon = 'play';
    iconColor = 'white';
  }

  const [showPopover, setShowPopover] = useState(false);

  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      backgroundStyle={{ backgroundColor: '#0001' }}
      arrowSize={{ width: 30, height: 15 }}
      popoverStyle={{ borderRadius: 10, padding: 20, gap: 20 }}
      onOpenStart={onFocus}
      ref={ref}
      from={(
        <TouchableOpacity
          onPress={() => { setShowPopover(true); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) }}
          disabled={status === 'locked'}
          style={{
            backgroundColor,
            borderRadius: 50,
            paddingVertical: 23,
            paddingHorizontal: 33,
            marginVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 80,
            alignSelf: 'center',
          }}
          
        >
          <Feather name={icon} size={36} color={iconColor} />
        </TouchableOpacity>
      )}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 18, fontWeight: 600, width: 250 }}>{title}</Text>
      <Link href="/lesson" onPress={() => setShowPopover(false)} style={{ width: '100%', padding: 15, backgroundColor: backgroundColor, borderRadius: 15, color: 'white', fontWeight: '600', fontSize: 16, textAlign: 'center' }}>Start</Link>
    </Popover>
  );
};

export default function Index() {
  const scrollViewRef = useRef(null);
  const textInputRef = useRef(null);

  const handleFocus = () => {
    // textInputRef.current?.measureLayout(
    //   scrollViewRef.current,
    //   (x, y, width, height) => {
    //     scrollViewRef.current?.scrollTo({ y: y, animated: true });
    //   }
    // );
  };

  return (
    <View>
      <View style={{ margin: 20, padding: 20, backgroundColor: '#0F7173', borderRadius: 25, borderStyle: 'solid', borderColor: '#406E8E', borderWidth: 1 }}>
        <Text style={{ color: '#E7ECEF' }}>Daily Devotional: Christ at the Center</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingVertical: 50, paddingBlockEnd: 500, }} ref={scrollViewRef}>
        {lessons.map(lesson => (
          <LessonNode
            key={lesson.id}
            title={lesson.title}
            status={lesson.status}
            onFocus={handleFocus}
            ref={textInputRef}
          />
        ))}
      </ScrollView>
    </View>
  );
}


