// event menu dropdown
$(function(){
	$('#eventMenuBtn').on('click', function(){
		$('#eventMenu').toggleClass('active');
		$('#eventSubmenu').toggle('slow');
	})
	$(document).mouseup(function (e) {
		if ($(e.target).closest('#eventMenu').length === 0) {
			$('#eventSubmenu').hide('slow');
			$('#eventMenu').removeClass('active');
		}
	})
})

// front video
window.onload = function() {
	var video = document.getElementById('frontVideo');
	video.play().catch(function(error) {
		console.log('Autoplay bloklandi:', error);
	});
};

$(function(){
	$('#soundOn').on('click', function(){
		var soundOn = document.getElementById('frontVideo');
		if ($(this).attr('data-sound') == 'off') {
			$(this).attr('data-sound','on');
			soundOn.muted = false;
			$(this).find('.icon-sound-off').hide();
			$(this).find('.icon-sound-on').show();
		} else {
			$(this).attr('data-sound','off');
			soundOn.muted = true;
			$(this).find('.icon-sound-on').hide();
			$(this).find('.icon-sound-off').show();
		}
		
	})
})

// Number Counter
function animateCount(element, target) {
  const increment = target / 100;
  let currentValue = 0;

  const updateCount = () => {
    currentValue += increment;
    if (currentValue < target) {
      let displayValue = Math.floor(currentValue);
      if (displayValue >= 10000) {
        displayValue = displayValue.toLocaleString('en').replace(/,/g, ' ');
      }
      element.textContent = displayValue;
      requestAnimationFrame(updateCount); // Smoother animation
    } else {
      let finalValue = target;
      if (finalValue >= 10000) {
        finalValue = finalValue.toLocaleString('en').replace(/,/g, ' ');
      }
      element.textContent = finalValue;
    }
  };

  updateCount();
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function initCounters() {
  const counters = document.querySelectorAll('.counter .count');
  counters.forEach(counter => {
    const target = +counter.parentElement.getAttribute('data-target');
    if (!counter.classList.contains('started') && isElementInViewport(counter)) {
      counter.classList.add('started'); // To avoid re-triggering
      animateCount(counter, target);
    }
  });
}

window.addEventListener('scroll', initCounters);
window.addEventListener('DOMContentLoaded', initCounters);


// slick js

$(document).ready(function(){

	if (screen.width > 768) {
		$('.partners-feedbacks').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			appendDots: $('.partners .pagination')
		});
	} else {
		$('.partners-feedbacks-item').each(function(i){
			if (i%3 == 0 ) {
				$('.partners-feedbacks-item').slice(i, i+3).wrapAll("<div class='partners-feedbacks-item-outer'></div>");
			}
		});
		$('.partners-feedbacks').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			appendDots: $('.partners .pagination')
		});
	}

	var x1 = $('.articles').width();
	var x2 = parseInt($('.articles-in').css('padding-left'));
	var x3 = parseInt($('.articles-top').css('width'));
	var x4 = parseInt($('.articles-top').css('margin-right'));
	var x5 = parseInt($('.articles-in').css('margin-left'));
	var articlesListWidth = x1 - x2 - x3 - x4 - x5;

	// $('.articles-list-outer').width(articlesListWidth - 1);

	$('.articles-list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		appendArrows: $('.articles-nav'),
		responsive: [
	    {
	      breakpoint: 1790,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1120,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
});

$(document).ready(function(){
	$('.projects-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		appendDots: $('.projects-top-pagination')
	});
});

// mobile menu open

$(function(){
	var windowWidth = screen.width;
	$('.header-burger').on('click', function(){
		$('#outlayer').removeClass('d-none');
		$('.mob-header').css('display','flex');
		$('.header-menu').css({
			'right': 0
		})
	})
	$('.header-burger-arrow').on('click', function(){
		if (screen.width > 576) {
			$('.header-menu').css({
				'right': '-350px'
			})
		} else {
			$('.header-menu').css({
				'right': '-283px'
			})
		}
		$('.mob-header').css('display','none');
		$('#outlayer').addClass('d-none');
	})
})

// contacts

$(function(){
	$('.cli-top-btn').on('click', function(){
		if ($(this).hasClass('rotated')) {
			$(this).parent().parent().find('.cl-item-body').slideUp();
			$(this).removeClass('rotated');
		} else {
			$(this).addClass('rotated');
			$(this).parent().parent().find('.cl-item-body').slideDown();
		}
	})
})

// map pins

$(function(){
	$('.mappins-item-btn').hover(
			function(){
				$(this).parent().css('z-index','11').find('.mappins-item-info').css('display','flex');
			},
			function(){
				$(this).parent().css('z-index','10').find('.mappins-item-info').css('display','none');
			}
		);
})

// event video

$(function(){
	var marginTop = ($('.event_front').height() - $('.event_front-video').height()) / 2;
	if (screen.width > 1310) {
		$('.event_front-video').css('margin-top', marginTop + 'px').removeClass('d-none');
	} else {
		$('.event_front').css({'display':'flex','justify-content':'center'});
		$('.event_front-video').css({'width':'auto','height':'100%'}).removeClass('d-none');
	}
})

// services button

$(function(){
	$('.smb-card-btn').on('click', function(){

	})

	$('.smb-card-btn').on('click', function(){
		if ($(this).hasClass('rotated')) {
			$(this).parent().parent().find('.smb-card-list').slideUp();
			$(this).removeClass('rotated');
		} else {
			$(this).addClass('rotated');
			$(this).parent().parent().find('.smb-card-list').slideDown();
		}
	})
})

// modal block

$(function(){
	$('.call-modal').on('click', function(){
		$('#modal').show();
	})
	$('.main-form-close').on('click', function(){
		$('#modal').hide();
	})

	
	$('.smbcl-item-link').on('click', function(){
		$('#modal').show();
	})
})

// partners animation

$(function(){
	if (screen.width < 1060) {
		$('.partners-list_1').eq(0).clone().appendTo('.partners-list-outer');
		$('.partners-list_2').eq(0).clone().appendTo('.partners-list-outer');
		$('.partners-list_1').eq(0).clone().appendTo('.partners-list-outer');
		$('.partners-list_2').eq(0).clone().appendTo('.partners-list-outer');
	}
})

// feedbacks more

$(function(){
	$('.fc-body-more').on('click', function(){
		if ($(this).hasClass('read-more-opened')) {
			$(this).removeClass('read-more-opened').parent().find('.feedbacks-card-body').css('height','132px');
			$(this).find('.fcb-more-close').hide();
			$(this).find('.fcb-more-open').show();
		} else {
			$(this).addClass('read-more-opened').parent().find('.feedbacks-card-body').css('height','auto');
			$(this).find('.fcb-more-open').hide();
			$(this).find('.fcb-more-close').show();
		}
	})
})

// Универсальная функция для отправки формы и показа уведомления
function submitForm(event) {
    event.preventDefault();

    const form = event.target;  // Ссылка на форму, которая была отправлена
    const formData = new FormData(form);  // Собираем все данные формы

    // Динамически формируем объект данных
    const data = {};
    formData.forEach((value, key) => {
        if (value.trim() !== "") {  // Добавляем только заполненные поля
            data[key] = value;
        }
    });

    // URL для Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbwU6WxtLCsjN1cTLUU8K0pcG8gM1nDpn7MqtblMHI5MMihMs6P3MR7rnDgrTCR85Gy12A/exec";

    // Отправка данных в Google Таблицу
    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            showSuccessMessage();  // Показываем сообщение при успехе
        } else {
            alert("Ошибка при отправке формы. Попробуйте еще раз.");
        }
    })
    .catch(error => console.error("Ошибка:", error));
}

// Функция показа уведомления
function showSuccessMessage() {
    const messageBox = document.createElement("div");
    messageBox.classList.add("success-message");
    messageBox.innerText = "Форма успешно заполнена, мы свяжемся с Вами в ближайшее время.";

    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 5000); // Убираем сообщение через 5 секунд
}

// Назначаем обработчик для всех форм на странице
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", submitForm);
});