<script setup>
import { getContacts } from "~/api/api";

const contacts = ref([]);

onBeforeMount(() => {
  const contactsData = getContacts().then((data) => (contacts.value = data));
  contacts.value = contactsData;
  console.log(contactsData);
});

</script>

<template>
  <div class="bg-base-100">
    <div class="m-auto max-w-[80%] py-3">
      <h1 class="text-3xl text-accent font-bold mx-auto mb-6 w-fit">
        Контакты
      </h1>
      <NewContactForm />
      <div class="flex items-center">
        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div v-if="contacts" v-for="contact in contacts" :key="contact">
            <Contact :contact="contact" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
