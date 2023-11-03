<script setup lang="ts">
import type { PropType } from "vue";

interface ContactData {
  name: String;
  type: Number;
  phone: String;
  source: Number;
  createdAt: "2023-11-02";
  updatedAt: "2023-11-02";
}

interface Contact {
  id: Number;
  data: ContactData;
  createdAt: String;
  updatedAt: String;
}

const props = defineProps({
  contact: Object as PropType<Contact>,
});
</script>

<template>

  <div
    class="flex flex-col rounded-md border-secondary border-2 p-3 bg-neutral shadow-sm hover:shadow-md hover:shadow-secondary hover:cursor-pointer h-[100px]"
  >
    <h2 class="text-accent mt-auto text-lg">{{ contact?.data.name }}</h2>
    <h3 class="text-sm text-primary">{{ contact?.data.phone }}</h3>
  </div>
</template>
