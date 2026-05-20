/**
 * 校园打卡指南 - 交互逻辑
 * 功能：卡片淡入动画、点击展开/收起详情、平滑滚动定位
 */

(function () {
    'use strict';

    function scrollToElement(element, offset) {
        offset = offset || 80;
        var elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        var targetPosition = elementTop - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }

    function initCardFadeIn() {
        var cards = document.querySelectorAll('.card');
        if (!window.IntersectionObserver) {
            cards.forEach(function (card) { card.classList.add('is-visible'); });
            return;
        }
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );
        cards.forEach(function (card) { observer.observe(card); });
    }

    function initCardToggle() {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function (card) {
            var toggleBtn = card.querySelector('.card-toggle-btn');
            if (!toggleBtn) return;
            toggleBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                var isExpanded = card.classList.contains('is-expanded');
                cards.forEach(function (otherCard) {
                    if (otherCard !== card && otherCard.classList.contains('is-expanded')) {
                        otherCard.classList.remove('is-expanded');
                        var otherBtn = otherCard.querySelector('.btn-text');
                        if (otherBtn) otherBtn.textContent = '查看详情';
                    }
                });
                if (isExpanded) {
                    card.classList.remove('is-expanded');
                    toggleBtn.querySelector('.btn-text').textContent = '查看详情';
                } else {
                    card.classList.add('is-expanded');
                    toggleBtn.querySelector('.btn-text').textContent = '收起详情';
                    requestAnimationFrame(function () {
                        setTimeout(function () { scrollToElement(card, 100); }, 100);
                    });
                }
            });
        });
    }

    function initCardBodyClick() {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function (card) {
            card.addEventListener('click', function (event) {
                if (event.target.closest('.card-toggle-btn')) return;
                var toggleBtn = card.querySelector('.card-toggle-btn');
                if (toggleBtn) toggleBtn.click();
            });
        });
    }

    function initImageLoadEffect() {
        var images = document.querySelectorAll('.card-image');
        images.forEach(function (img) {
            if (img.complete) {
                img.classList.add('is-loaded');
            } else {
                img.addEventListener('load', function () { img.classList.add('is-loaded'); });
                img.addEventListener('error', function () { img.style.opacity = '0.3'; });
            }
        });
    }

    function init() {
        initCardFadeIn();
        initCardToggle();
        initCardBodyClick();
        initImageLoadEffect();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
