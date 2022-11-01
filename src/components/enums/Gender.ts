export const GENDER = {
  MALE: '0',
  FEMALE: '1',
  OTHER: '2',
} as const;

export const GENDER_ITEM: { label: string; value: typeof GENDER[keyof typeof GENDER]; id: string }[] = [
  {
    label: '男性',
    value: GENDER.MALE,
    id: 'genderMale',
  },
  {
    label: '女性',
    value: GENDER.FEMALE,
    id: 'genderFemale',
  },
  {
    label: 'その他',
    value: GENDER.OTHER,
    id: 'genderOther',
  },
];
