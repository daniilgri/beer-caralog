<template>
  <div
    v-show="display"
    :class="{
      'flash-notification': true,
      'flash-notification_status_succeed': status === 'succeed',
      'flash-notification_status_failed': status === 'failed'
    }"
  >
    <p
      :class="{
        'flash-notification__text': true,
        'flash-notification__text_status_succeed': status === 'succeed',
        'flash-notification__text_status_failed': status === 'failed'
      }"
    >
      {{ status }}
    </p>
    <button
      :class="{
        'flash-notification__button': true,
        'flash-notification__button_status_succeed': status === 'succeed',
        'flash-notification__button_status_failed': status === 'failed'
      }"
      @click="hide"
    >
      Close
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { NOTIFICATION_MUTATION_TYPES } from "@/store/notification/mutationTypes";

export default Vue.extend({
  name: "FlashNotification",
  computed: {
    ...mapState("notification", {
      display: "display",
      status: "status",
      message: "message"
    })
  },
  mounted() {
    setTimeout(() => {
      this.hide();
    }, 5000);
  },
  methods: {
    ...mapMutations("notification", {
      hide: NOTIFICATION_MUTATION_TYPES.HIDE
    })
  }
});
</script>

<style lang="scss" scoped>
$flashNotificationFailedColor: #f44336;
$flashNotificationSucceedColor: #7cb342;
$flashNotificationTextFailedColor: #f44336;
$flashNotificationTextSucceedColor: #7cb342;
$flashNotificationButtonFailedColor: #f44336;
$flashNotificationButtonSucceedColor: #7cb342;

.flash-notification {
  position: absolute;
  bottom: 2%;
  left: 5%;
  min-width: 10%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px;

  &_status {
    &_succeed {
      border: 1px solid rgba($color: $flashNotificationSucceedColor, $alpha: 1);
      background-color: rgba(
        $color: $flashNotificationSucceedColor,
        $alpha: 0.15
      );
    }
    &_failed {
      border: 1px solid rgba($color: $flashNotificationFailedColor, $alpha: 1);
      background-color: rgba(
        $color: $flashNotificationFailedColor,
        $alpha: 0.1
      );
    }
  }

  &__text {
    &_status {
      &_succeed {
        color: $flashNotificationTextSucceedColor;
      }

      &_failed {
        color: $flashNotificationTextFailedColor;
      }
    }
  }

  &__button {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    outline: none;
    text-decoration: underline;

    &_status {
      &_succeed {
        color: $flashNotificationButtonSucceedColor;
      }

      &_failed {
        color: $flashNotificationButtonFailedColor;
      }
    }
  }
}
</style>
