import * as zod from 'zod';
import { GENDER } from '@/components/enums/Gender';
import { INTEREST } from '@/components/enums/Interest';

export const UserFormSchema = zod.object({
  name: zod.string().max(15, { message: '15文字以内で入力してください' }).optional(),
  userName: zod
    .string({ required_error: '必須項目です' })
    .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9_-]+$/, {
      message: '半角英数字記号（_-）で入力してください。記号は先頭の配置不可です。',
    })
    .min(5, { message: '5文字以上で入力してください' })
    .max(15, { message: '15文字以内で入力してください' }),
  gender: zod.nativeEnum(GENDER, {
    required_error: '必須項目です',
    invalid_type_error: '選択値に誤りがあります',
  }),
  interest: zod.string().array().min(1, {
    message: '必須項目です。',
  }),
  email: zod.string({ required_error: '必須項目です' }).email({ message: 'メールアドレスの形式で入力してください' }),
});
