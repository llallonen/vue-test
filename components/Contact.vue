<script setup lang="ts">
import type { PropType } from "vue";
import type { Contact } from "~/interfaces";

const props = defineProps({
  contact: Object as PropType<Contact>,
  kind: {
    type: String,
  },
});

const typeMap = [
  { type: "call", name: "Звонок" },
  { type: "callRequest", name: "Заявка на обратный звонок" },
  { type: "calcRequest", name: "Заявка на расчет" },
];

const sourceMap = [
  { type: "direct", name: "Яндекс.Директ" },
  { type: "seo", name: "SEO" },
  { type: "avito", name: "Авито" },
];
</script>

<template>
  <div
    v-if="contact"
    class="flex flex-row justify-between rounded-md border-secondary border-2 p-3 bg-neutral shadow-sm hover:shadow-md hover:shadow-secondary hover:cursor-pointer h-[100px]"
  >
    <div class="w-6/12">
      <h2 class="text-accent mt-auto text-xl">{{ contact?.data.name }}</h2>
      <h3 class="text-md text-primary">{{ contact?.data.phone }}</h3>
    </div>
    <div class="w-5/12 text-lg">
      <div :class="[`text-${typeMap[contact.data.type].type}`]">
        {{ typeMap[contact.data.type].name }}
      </div>
      <div :class="[`text-${sourceMap[contact.data.source].type}`]">
        {{ sourceMap[contact.data.source].name }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
