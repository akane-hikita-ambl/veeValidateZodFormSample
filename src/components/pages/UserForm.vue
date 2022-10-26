<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import type * as zod from 'zod';
import FormTextField from '@/components/forms/FormTextField.vue';
import FormRadioButton from '@/components/forms/FormRadioButton.vue';
import Label from '@/components/atoms/Label.vue';
import { UserFormSchema } from '@/components/models/UserFormSchema';
import FormCheckBox from '../forms/FormCheckBox.vue';

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
      <div class="formRowContainer">
        <Label label="名前" />
        <FormTextField name="name" placeholder="野村 太郎" />
      </div>
      <div class="formRowContainer">
        <Label label="ユーザー名" />
        <FormTextField name="userName" placeholder="nomura_taro" />
      </div>
      <div class="formRowContainer">
        <Label label="性別" />
        <div class="flexContainer">
          <FormRadioButton name="gender" value="0">
            <template #radioLabel>
              <span>男性</span>
            </template>
          </FormRadioButton>
          <FormRadioButton name="gender" value="1">
            <template #radioLabel>
              <span>女性</span>
            </template>
          </FormRadioButton>
          <FormRadioButton name="gender" value="2">
            <template #radioLabel>
              <span>その他</span>
            </template>
          </FormRadioButton>
        </div>
      </div>
      <div class="formRowContainer">
        <Label label="興味関心" />
        <div class="flexContainer">
          <FormCheckBox name="interest" value="vue">
            <template #checkLabel>
              <span>Vue3</span>
            </template>
          </FormCheckBox>
          <FormCheckBox name="interest" value="react">
            <template #checkLabel>
              <span>React</span>
            </template>
          </FormCheckBox>
          <FormCheckBox name="interest" value="angular">
            <template #checkLabel>
              <span>Angular</span>
            </template>
          </FormCheckBox>
          <FormCheckBox name="interest" value="ts">
            <template #checkLabel>
              <span>TypeScript</span>
            </template>
          </FormCheckBox>
          <FormCheckBox name="interest" value="nuxt">
            <template #checkLabel>
              <span>Nuxt.js</span>
            </template>
          </FormCheckBox>
          <FormCheckBox name="interest" value="next">
            <template #checkLabel>
              <span>Next.js</span>
            </template>
          </FormCheckBox>
        </div>
      </div>
      <div class="formRowContainer">
        <Label label="メールアドレス" />
        <FormTextField name="email" placeholder="test@example.co.jp" />
      </div>
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
div.flexContainer {
  display: flex;
  flex-wrap: wrap;
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
