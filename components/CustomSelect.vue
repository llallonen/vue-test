<template>
  <div
    :class="[
      'select relative w-full text-left outline-none rounded-md mt-2 ',
      `select--${kind}`,
      `bg-${optType}`,
    ]"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="selected w-full py-3 pl-3 rounded-md border-base-200 border-2 text-accent border-b-2 border-b-base-200"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items w-full rounded-md rounded-t-none -mt-1 border-base-200 border-2 border-t-0 text-accent"
      :class="{ selectHide: !open }"
    >
      <div
        :class="['pointer py-3 pl-2',
      `bg-${optType === 'default' ? option.type : option.type}`,
    ]"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.name;
          open = false;
          $emit(`update:${kind}`, option.name);
          optType = option.type;
        "
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    kind: {
      type: String,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0].name
        : null,
      open: false,
      optType: "default",
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>

.select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}
.selectHide {
  display: none;
}
</style>
