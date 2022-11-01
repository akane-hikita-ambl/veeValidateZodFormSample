<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import type * as zod from 'zod';
import FormTextField from '@/components/forms/FormTextField.vue';
import FormRadioButton from '@/components/forms/FormRadioButton.vue';
import Label from '@/components/atoms/Label.vue';
import { UserFormSchema } from '@/components/models/UserFormSchema';
import FormCheckBox from '@/components/forms/FormCheckBox.vue';
import FormContentGroup from '@/components/forms/FormContentGroup.vue';
import { GENDER_ITEM } from '@/components/enums/Gender';

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
        <FormRadioButton v-for="item in GENDER_ITEM" name="gender" :value="item.value" :id="item.id">
          <template #radioLabel>
            <Label :label="item.label" :for="item.id" />
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
