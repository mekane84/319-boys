<template>
  <div class="m1 menu">
    <div id="menu-center">
      <ul>
        <li><a class="active" href="#home">Home</a>

        </li>
        <li><a href="#portfolio">Portfolio</a>

        </li>
        <li><a href="#about">About</a>

        </li>
        <li><a href="#contact">Contact</a>

        </li>
      </ul>
    </div>
  </div>
  <div id="home" class="section"></div>
  <div id="portfolio" class="section"></div>
  <div id="about" class="section"></div>
  <div id="contact" class="section"></div>
</template>

<script>
export default {
  name: "ScrollSpy"
}

(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();

</script>

<style scoped>

</style>
