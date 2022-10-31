<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import type * as zod from 'zod';
import FormTextField from '@/components/forms/FormTextField.vue';
import FormRadioButton from '@/components/forms/FormRadioButton.vue';
import Label from '@/components/atoms/Label.vue';
import { UserFormSchema } from '@/components/models/UserFormSchema';
import FormCheckBox from '../forms/FormCheckBox.vue';
import FormContentGroup from '../forms/FormContentGroup.vue';

export type UserFormValues = zod.infer<typeof UserFormSchema>;
const validationSchema = toFormValidator(UserFormSchema);

const { handleSubmit } = useForm({
  validationSchema,
});

const emit = defineEmits<{
  (
    e: 'submit',
    formValues: UserFormValues // 子から親に渡すデータ
  ): void;
}>();

// submit時の処理
const onSubmit = handleSubmit((formValues) => {
  emit('submit', formValues);
});
</script>

<template>
  <div>
    <form @submit="onSubmit">
      <FormContentGroup label="名前" name="name">
        <FormTextField name="name" placeholder="野村 太郎" />
      </FormContentGroup>

      <FormContentGroup label="ユーザー名" name="userName">
        <FormTextField name="userName" placeholder="nomura_taro" />
      </FormContentGroup>

      <FormContentGroup label="性別" name="gender">
        <FormRadioButton name="gender" value="0" id="genderMale">
          <template #radioLabel>
            <Label label="男性" for="genderMale" />
          </template>
        </FormRadioButton>
        <FormRadioButton name="gender" value="1" id="genderFemale">
          <template #radioLabel>
            <Label label="女性" for="genderFemale" />
          </template>
        </FormRadioButton>
        <FormRadioButton name="gender" value="2" id="genderOther">
          <template #radioLabel>
            <Label label="その他" for="genderOther" />
          </template>
        </FormRadioButton>
      </FormContentGroup>

      <FormContentGroup name="interest" label="興味関心">
        <FormCheckBox name="interest" value="vue" id="vue">
          <template #checkLabel>
            <Label label="Vue3" for="vue" />
          </template>
        </FormCheckBox>
        <FormCheckBox name="interest" value="react" id="react">
          <template #checkLabel>
            <Label label="React" for="react" />
          </template>
        </FormCheckBox>
        <FormCheckBox name="interest" value="angular" id="angular">
          <template #checkLabel>
            <Label label="Angular" for="angular" />
          </template>
        </FormCheckBox>
        <FormCheckBox name="interest" value="ts" id="ts">
          <template #checkLabel>
            <Label label="TypeScript" for="ts" />
          </template>
        </FormCheckBox>
        <FormCheckBox name="interest" value="nuxt" id="nuxt">
          <template #checkLabel>
            <Label label="Nuxt.js" for="nuxt" />
          </template>
        </FormCheckBox>
        <FormCheckBox name="interest" value="next" id="next">
          <template #checkLabel>
            <Label label="Next.js" for="next" />
          </template>
        </FormCheckBox>
      </FormContentGroup>

      <FormContentGroup name="email" label="メールアドレス">
        <FormTextField name="email" placeholder="test@example.co.jp" />
      </FormContentGroup>

      <button type="submit">送信</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: grid;
  grid-row-gap: 2rem;
}
div.formRowContainer {
  display: grid;
  grid-template-columns: 1fr 20rem;
  grid-column-gap: 1rem;
}
label {
  text-align: left;
}
@media (max-width: 480px) {
  div.formRowContainer {
    grid-template-columns: 140px auto;
  }
}
</style>
