import * as zod from 'zod';
import { GENDER } from '@/components/enums/Gender';

/**
 * カスタムエラーメッセージ
 * node_modules\zod\lib\locales\en.js参考に
 */
const customErrorMap: zod.ZodErrorMap = (error, ctx) => {
  switch (error.code) {
    case zod.ZodIssueCode.invalid_type:
      if (error.received === zod.ZodParsedType.undefined) {
        return { message: '必須項目です' };
      } else {
        return { message: '値に誤りがあります' };
      }

    case zod.ZodIssueCode.invalid_enum_value:
      return { message: '値に誤りがあります' };

    case zod.ZodIssueCode.invalid_literal:
      // true/falseチェックボックス用メッセージ
      return { message: 'チェック必須です' };

    case zod.ZodIssueCode.too_big:
      return { message: `${error.inclusive}文字以内で入力してください` };

    case zod.ZodIssueCode.too_small:
      if (error.type === 'array') {
        return { message: `${error.minimum}つ以上チェックしてください` };
      }
      return { message: `${error.minimum}文字以上で入力してください` };

    case zod.ZodIssueCode.invalid_string:
      if (error.validation === 'email') {
        return { message: 'メールアドレスの形式で入力してください' };
      }
      if (error.validation === 'regex') {
        return { message: '半角英数字記号（_-）で入力してください。記号は先頭の配置不可です。' };
      }
  }

  // デフォルトのメッセージを返す
  return { message: ctx.defaultError };
};

export const UserFormSchema = zod.object({
  userName: zod.string({ errorMap: customErrorMap }).max(15).optional(),
  userID: zod
    .string({ errorMap: customErrorMap })
    .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9_-]+$/)
    .min(5)
    .max(15),
  gender: zod.nativeEnum(GENDER, { errorMap: customErrorMap }),
  interest: zod.array(zod.string(), { errorMap: customErrorMap }).min(1),
  email: zod.string({ errorMap: customErrorMap }).email(),
  confirm: zod.literal(true, { errorMap: customErrorMap }),
});
