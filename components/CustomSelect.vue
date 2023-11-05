<template>
  <div
    :class="[
      'select relative w-full text-left outline-none rounded-md mt-2 ',
      `select--${kind}`,
      `select--${optType}`,
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
        class="pointer py-3 pl-2"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.name;
          open = false;
          $emit('input', option.name);
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
.select--call,
.select--type .items div:nth-of-type(1) {
  background-color: #457272;
}
.select--callRequest,
.select--type .items div:nth-of-type(2) {
  background-color: #ca893a;
}
.select--calcRequest,
.select--type .items div:nth-of-type(3) {
  background-color: #85506d;
}
.select--direct,
.select--source .items div:nth-of-type(1) {
  background-color: #4c4572;
}
.select--seo,
.select--source .items div:nth-child(2) {
  background-color: #ca3a6a;
}
.select--avito,
.select--source .items div:nth-child(3) {
  background-color: #508564;
}
.selectHide {
  display: none;
}
</style>
