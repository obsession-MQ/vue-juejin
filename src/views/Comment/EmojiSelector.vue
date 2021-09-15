<template>
  <div class="emoji-selector" @mousedown.prevent @mousedown.stop>
    <div class="triangle" />
    <div class="emoji-content">
      <div class="category">
        <div
          v-for="(item, i) in currentEmojis"
          :key="`emoji-${i}`"
          class="item"
          @click="$emit('choose', item)"
        >{{ item }}</div>
      </div>
    </div>
    <div class="next-page">
      <div
        v-for="cat in Object.keys(emojis)"
        :key="cat"
        :class="{ active: currentCat === cat }"
        @click="currentCat = cat"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImojiSelector',
  data() {
    return {
      currentCat: 'FrequentlyUsed',
      emojis: {
        FrequentlyUsed: [
          '😃',
          '😘',
          '😂',
          '😳',
          '😍',
          '👏',
          '👍',
          '👎',
          '😁',
          '😉',
          '😠',
          '😞',
          '😥',
          '😭',
          '😝',
          '😡',
          '❤',
          '💔',
          '😣',
          '😔',
          '😄',
          '😷',
          '😚',
          '😓',
          '😊',
          '😢',
          '😜',
          '😨',
          '😰',
          '😲',
          '😏',
          '😱',
          '😪',
          '😖',
          '😌',
          '😒',
          '👻',
          '🎅',
          '👧',
          '👦',
          '👩',
          '👨',
          '🐶',
          '🐱',
          '👊',
          '✊',
          '✌',
          '💪',
          '👆',
          '👇',
          '👉',
          '👈',
          '👌',
          '💩'
        ],
        Symbols0: [
          '🤗',
          '😎',
          '🤓',
          '👩‍💻',
          '👨‍💻',
          '🙄',
          '😭',
          '😨',
          '🤪',
          '🎉',
          '🤔',
          '🐵',
          '😇',
          '🤬',
          '🐈',
          '😹',
          '🙀',
          '🇨🇳',
          '👮',
          '🐕',
          '✅',
          '👋',
          '🔥',
          '🐛',
          '🍉',
          '👽',
          '🤖',
          '⌚',
          '🤝',
          '🏳️‍🌈',
          '🚩',
          '💤',
          '®',
          '©',
          '💯',
          '™',
          '💻',
          '📅',
          '📌',
          '✉',
          '⌨',
          '📗',
          '🤳',
          '🛌',
          '🎣',
          '🎨',
          '🎧',
          '🎸',
          '🎤',
          '🏸',
          '🏀',
          '⚽',
          '🎮',
          '🏊'
        ],
        Symbols1: [
          '🍗',
          '🦄',
          '🔞',
          '🙏',
          '☀',
          '🌙',
          '🌟',
          '⚡',
          '☁',
          '☔',
          '🍁',
          '🌻',
          '🍃',
          '👗',
          '🎀',
          '👄',
          '🌹',
          '☕',
          '🎂',
          '🕙',
          '🍺',
          '🔍',
          '📱',
          '🏠',
          '🚗',
          '🎁',
          '⚽',
          '💣',
          '💎',
          '💊',
          '🤮',
          '🏆',
          '👿'
        ]
      }
    }
  },
  computed: {
    currentEmojis() {
      return this.emojis[this.currentCat]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/EmojiSelector.scss";
</style>
