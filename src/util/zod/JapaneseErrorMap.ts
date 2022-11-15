import * as zod from 'zod';

/**
 * zodエラーメッセージ（日本語）
 * node_modules\zod\lib\locales\en.js参考に
 */
export const JapaneseErrorMap: zod.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case zod.ZodIssueCode.invalid_type:
      if (issue.received === zod.ZodParsedType.undefined) {
        return { message: '必須項目です' };
      } else {
        return { message: '値に誤りがあります' };
      }

    case zod.ZodIssueCode.invalid_enum_value:
      return { message: '値に誤りがあります' };

    case zod.ZodIssueCode.too_big:
      return { message: `${issue.inclusive}文字以内で入力してください` };

    case zod.ZodIssueCode.too_small:
      if (issue.type === 'array') {
        return { message: `${issue.minimum}つ以上チェックしてください` };
      }
      return { message: `${issue.minimum}文字以上で入力してください` };

    case zod.ZodIssueCode.invalid_string:
      if (issue.validation === 'email') {
        return { message: 'メールアドレスの形式で入力してください' };
      }
  }

  // デフォルトのメッセージを返す
  return { message: ctx.defaultError };
};

zod.setErrorMap(JapaneseErrorMap);
