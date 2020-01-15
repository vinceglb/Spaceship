<template>
  <div class="product-item">
    <router-link
      :to="{ name: 'product', params: { id: data.id } }"
      class="product-link"
    >
      #{{ index }} {{ data.name }}
    </router-link>
    <div
      v-if="!disableActions"
      @click="$emit('deleteProduct', data.id)"
      class="delete-btn"
    >
      {{ isProductDeletionPending ? 'delete in progress...' : 'delete' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    isProductDeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .product-link {
    color: $vue-color;
  }
  .delete-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: $danger-color;
    border-color: $danger-color;
  }
}
</style>
