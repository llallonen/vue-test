<script lang="ts" setup>
import { ref } from "vue";
import { createContact } from "~/api/api";
import type { ContactData } from "~/interfaces";

const typeSelectOptions = [
  { type: "call", name: "Звонок" },
  { type: "callRequest", name: "Заявка на обратный звонок" },
  { type: "calcRequest", name: "Заявка на расчет" },
];

const typeDefault = {
  type: "Выберите тип взаимодействия",
};

const sourceSelectOptions = [
  { type: "direct", name: "Яндекс.Директ" },
  { type: "seo", name: "SEO" },
  { type: "avito", name: "Авито" },
];

const sourceDefault = {
  type: "Выберите происхождение контакта",
};

let startValidation = false;
const name = ref("");
const phone = ref("");
const source = ref("");
const type = ref("");

async function submitForm() {
  let contactData: ContactData;
  startValidation = true;
  const validation = validateForm();

  if (validation) {
    contactData = {
      name: name.value,
      phone: phone.value,
      source: getSourceIdx(),
      type: getTypeIdx(),
    };
    createContact(contactData);
  }
}

const isNameValid = () => {
  return startValidation ? name.value.length >= 1 : null;
};

const isPhoneValid = () => {
  const regex = /^[7][9][0-9]{9}/i;
  return startValidation ? regex.test(phone.value) : null;
};

const getTypeIdx = () => {
  const types = typeSelectOptions.map((element) => element.name);
  return types.indexOf(type.value);
};

const getSourceIdx = () => {
  const sources = sourceSelectOptions.map((element) => element.name);
  return sources.indexOf(source.value);
};

let isTypeValid = false;
let isSourceValid = false;

const validateForm = () => {
  getTypeIdx() != -1 ? (isTypeValid = true) : isTypeValid;
  getSourceIdx() != -1 ? (isSourceValid = true) : isSourceValid;
  return isNameValid() && isPhoneValid() && isTypeValid && isSourceValid;
};

</script>

<template>
  <div class="flex items-center justify-center">
    <div class="rounded-md border-secondary border-2 p-4 mb-10">
      <h2 class="text-lg text-accent text-center uppercase mb-4">
        Добавить новый контакт
      </h2>
      <form class="flex flex-col">
        <label class="mb-6 text-left text-accent">
          Имя
          <input
            v-model="name"
            type="text"
            required
            placeholder="Введите имя"
            class="bg-base-200 text-white w-full rounded-md px-3 py-2 mt-2"
            :class="{ invalidInput: !isNameValid }"
          />
          <p class="invalid">Имя должно содержать хотя бы 1 символ</p>
        </label>
        <label class="mb-4 text-left text-accent">
          Номер телефона
          <input
            v-model="phone"
            type="phone"
            required
            placeholder="Введите номер телефона"
            :class="{ invalidInput: !isPhoneValid }"
            class="bg-base-200 text-white w-full rounded-md px-3 py-2 mt-2"
          />
          <p class="invalid">Номер должен быть введен в формате 79XXXXXXXXX</p>
        </label>
        <CustomSelect
          :kind="'type'"
          :options="typeSelectOptions"
          :default="typeDefault.type"
          @update:type="(newValue) => (type = newValue)"
          :type="type"
        />
        <CustomSelect
          :kind="'source'"
          :options="sourceSelectOptions"
          :default="sourceDefault.type"
          :source="source"
          @update:source="(newValue) => (source = newValue)"
        />
        <button
          type="submit"
          class="bg-primary text-white transition-all duration-100 hover:bg-success rounded-md px-6 py-2 mt-4"
          @click.prevent="submitForm"
        >
          Создать контакт
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.invalid {
  color: rgb(192, 85, 85);
  text-decoration: dotted;
}
.invalidInput {
  border: 1px solid red;
}
.valid {
  display: none;
}
</style>
