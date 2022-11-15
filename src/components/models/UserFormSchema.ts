import * as zod from 'zod';
import { GENDER } from '@/components/enums/Gender';
import { JapaneseErrorMap } from '@/util/zod/JapaneseErrorMap';

/**
 * UserForm用カスタムエラーメッセージ
 */
const UserFormErrorMap: zod.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case zod.ZodIssueCode.invalid_literal:
      // true/falseチェックボックス用メッセージ
      return { message: 'チェック必須です' };

    case zod.ZodIssueCode.invalid_string:
      if (issue.validation === 'regex') {
        return { message: '半角英数字記号（_-）で入力してください。記号は先頭の配置不可です。' };
      }
  }

  // デフォルトのメッセージを返す
  return { message: JapaneseErrorMap(issue, ctx).message };
};

export const UserFormSchema = zod.object({
  userName: zod.string().max(15).optional(),
  userID: zod
    .string({ errorMap: UserFormErrorMap })
    .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9_-]+$/)
    .min(5)
    .max(15),
  gender: zod.nativeEnum(GENDER),
  interest: zod.array(zod.string()).min(1),
  email: zod.string().email(),
  confirm: zod.literal(true, { errorMap: UserFormErrorMap }),
});
