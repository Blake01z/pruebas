<template>
  <div class="faq">
      <div class="faq-title">
        <p class="question">{{i+1}}. {{faq.question}}</p>
        <div>
            <button class="btn-show-question" v-if="showAnswer" @click="showAnswer = !showAnswer">-</button>
            <button class="btn-show-question" v-else @click="showAnswer = !showAnswer">+</button>
        </div>
      </div>
      <p class="answer" :class="{open:showAnswer}">{{faq.answer}}</p>
  </div>
</template>

<script>
export default {
    name:'Faq',
    props:['faq','i'],
    data: () => ({
        showAnswer: false
    })
}
</script>
