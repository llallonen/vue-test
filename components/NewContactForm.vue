<script lang="ts" setup>
import { ref, computed } from "vue";

const startValidation = ref(false);
const name = ref("");
const phone = ref("");

async function submitForm() {
  startValidation.value = true;
  console.log(name.value);
  console.log(phone.value);
}

const isNameValid = computed(() => {
  return startValidation.value ? name.value.length >= 1 : null;
});

const isPhoneValid = computed(() => {
  const regex = /^[7][9][0-9]{9}/i;
  return startValidation.value ? regex.test(phone.value) : null;
});

const checkName = () => {
  return isNameValid;
};

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
            @input="checkName"
            class="bg-base-200 text-white w-full rounded-md px-3 py-2 mt-2"
            :class="{ invalidInput: !isNameValid }"
          />
          <p v-if="{ checkName }" class="invalid">
            Имя должно содержать хотя бы 1 символ
          </p>
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
        <CustomSelect :kind="'type'" :options="typeSelectOptions" :default="typeDefault.type" />
        <CustomSelect :kind="'source'" :options="sourceSelectOptions" :default="sourceDefault.type" />
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
