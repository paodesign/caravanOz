/* ============================================================
   CaravanOz — Interacciones avanzadas del sitio (Data-Driven UI)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Fallback Local de Datos (CORS-Safe para file:// y offline) ---------- */
  var CARAVANOZ_DATA = {
    "videos": [
      {
        "id": "vid-1",
        "tag": "Reflexiones",
        "title": "Un año entero recorriendo Queensland en caravana",
        "duration": "19:50",
        "gradientClass": "grad-1",
        "image": "assets/queensland_beach.jpg", // Progresivo: se cargará si existe el archivo
        "views": "4,2 mil vistas",
        "date": "Hace 2 semanas",
        "url": "https://www.youtube.com/@CaravanOz"
      },
      {
        "id": "vid-2",
        "tag": "Guía de destino",
        "title": "Qué hacer en Cairns + mejoras a la caravana y sorpresas épicas",
        "duration": "42:43",
        "gradientClass": "grad-2",
        "image": "assets/cairns_lagoon.jpg",
        "views": "6,8 mil vistas",
        "date": "Hace 1 mes",
        "url": "https://www.youtube.com/@CaravanOz"
      },
      {
        "id": "vid-3",
        "tag": "La realidad",
        "title": "La verdad detrás del romanticismo del camping",
        "duration": "20:23",
        "gradientClass": "grad-3",
        "image": "assets/outback_sunset.jpg",
        "views": "9,1 mil vistas",
        "date": "Hace 1 mes",
        "url": "https://www.youtube.com/@CaravanOz"
      },
      {
        "id": "vid-4",
        "tag": "Aventura",
        "title": "Cairns y Kuranda: una aventura épica entre la selva",
        "duration": "7:55",
        "gradientClass": "grad-4",
        "image": "assets/kuranda_rainforest.jpg",
        "views": "5,3 mil vistas",
        "date": "Hace 2 meses",
        "url": "https://www.youtube.com/@CaravanOz"
      }
    ],
    "podcastEpisodes": [
      {
        "num": "04",
        "title": "Cómo financiamos la vida en la ruta",
        "duration": "48 min",
        "date": "hace 1 week",
        "spotifyUrl": "https://open.spotify.com/"
      },
      {
        "num": "03",
        "title": "Los miedos antes de largar todo",
        "duration": "39 min",
        "date": "hace 3 weeks",
        "spotifyUrl": "https://open.spotify.com/"
      },
      {
        "num": "02",
        "title": "Trabajar online viajando: lo bueno y lo feo",
        "duration": "44 min",
        "date": "hace 1 month",
        "spotifyUrl": "https://open.spotify.com/"
      },
      {
        "num": "01",
        "title": "Por qué elegimos Australia para vivir en caravana",
        "duration": "52 min",
        "date": "hace 1 month",
        "spotifyUrl": "https://open.spotify.com/"
      }
    ],
    "guides": [
      {
        "id": "guide-budget",
        "iconType": "t",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 1.5-2.5 1.5-2.5 2.5s2.5 1 2.5 2.5a2.5 2 0 0 1-5 0\"/></svg>",
        "tag": "Presupuesto",
        "title": "Costos de vida en la ruta",
        "description": "Cuánto cuesta realmente vivir viajando: combustible, comida, campings y los gastos que nadie te cuenta.",
        "url": "guias/costos-vida-ruta-australia.html"
      },
      {
        "id": "guide-visas",
        "iconType": "o",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M8.5 16.5a3.5 3.5 0 0 1 7 0\"/></svg>",
        "tag": "Visas",
        "title": "Work and Holiday Visa",
        "description": "Paso a paso para aplicar a la visa, requisitos, tiempos y cómo conseguir trabajo apenas llegás.",
        "url": "guias/work-and-holiday-visa-australia.html"
      },
      {
        "id": "guide-camping",
        "iconType": "s",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20l9-15 9 15z\"/><path d=\"M12 5v15M3 20h18\"/></svg>",
        "tag": "Camping",
        "title": "Mejores campings gratuitos",
        "description": "Nuestro mapa de free camps imperdibles: dónde parar gratis, con qué servicios y cómo encontrarlos.",
        "url": "guias/mejores-campings-gratuitos-australia.html"
      },
      {
        "id": "guide-setup",
        "iconType": "o",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.7 6.3a3 3 0 0 0 4 4l-2.4 2.4a3 3 0 0 0-4-4z\"/><path d=\"M12.3 8.7l-7 7a2 2 0 0 0 2.8 2.8l7-7\"/></svg>",
        "tag": "Setup",
        "title": "Cómo equipar tu caravana",
        "description": "Energía solar, agua, internet y el equipamiento esencial para vivir cómodos viviendo sobre ruedas.",
        "url": "guias/como-equipar-caravana-australia.html"
      },
      {
        "id": "guide-remote",
        "iconType": "t",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M2 20h20M8 20l1-4M16 20l-1-4\"/></svg>",
        "tag": "Trabajo remoto",
        "title": "Trabajar online en la ruta",
        "description": "Cómo mantener ingresos como nómada digital: internet en zonas remotas, horarios y clientes desde el camino.",
        "url": "guias/trabajar-online-ruta-australia.html"
      },
      {
        "id": "guide-itineraries",
        "iconType": "s",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 3 4 5v16l5-2 6 2 5-2V3l-5 2-6-2z\"/><path d=\"M9 3v16M15 5v16\"/></svg>",
        "tag": "Itinerarios",
        "title": "Rutas de la costa este",
        "description": "Itinerarios probados por nosotros: paradas imperdibles, distancias y los mejores tramos para manejar.",
        "url": "guias/rutas-costa-este-australia.html"
      }
    ],
    "diaryEntries": [
      {
        "image": "assets/diario_byron.jpg",
        "location": "Byron Bay, NSW",
        "caption": "Despertar frente al mar"
      },
      {
        "image": "assets/diario_uluru.jpg",
        "location": "Red Centre, NT",
        "caption": "Tierra roja y estrellas"
      },
      {
        "image": "assets/diario_ocean.jpg",
        "location": "Great Ocean Road, VIC",
        "caption": "Manejando en el borde del mundo"
      },
      {
        "image": "assets/diario_pinklake.jpg",
        "location": "Hutt Lagoon, WA",
        "caption": "Donde la sal se tiñe de rosa"
      }
    ]
  };

  /* ---------- Inicialización e Hidratación de UI ---------- */
  function initUI() {
    hydrateVideos(CARAVANOZ_DATA.videos);
    hydratePodcast(CARAVANOZ_DATA.podcastEpisodes);
    hydrateGuides(CARAVANOZ_DATA.guides);
    hydrateDiary(CARAVANOZ_DATA.diaryEntries);

    // Intenta actualizar los datos desde data.json si corre en un servidor
    fetch('data.json')
      .then(function (res) { return res.json(); })
      .then(function (freshData) {
        console.log("✦ CaravanOz: Contenido dinámico cargado exitosamente desde data.json");
        CARAVANOZ_DATA = freshData;
        hydrateVideos(freshData.videos);
        hydratePodcast(freshData.podcastEpisodes);
        hydrateGuides(freshData.guides);
        hydrateDiary(freshData.diaryEntries);
        setupReveals(); // Reactivar reveals con los nuevos nodos
      })
      .catch(function (err) {
        console.warn("✦ CaravanOz (Modo Local): Cargado fallback interno para saltar bloqueos CORS en protocolo file://");
        setupReveals(); // Reactivar en fallback
      });

    setupCoreInteractions();
    setupPodcastPlayerInteractions();
  }

  /* ---------- Hidratación Dinámica de Nodos HTML ---------- */
  function hydrateVideos(videos) {
    var carousel = document.getElementById('carousel');
    if (!carousel) return;
    carousel.innerHTML = videos.map(function (vid) {
      // Intentar cargar la imagen si existe, con fallback a gradiente
      var imageHtml = vid.image 
        ? '<img src="' + vid.image + '" alt="' + vid.title + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';" style="width:100%; height:100%; object-fit:cover; transition:transform 0.6s ease;" />'
        : '';
      var fallbackHtml = '<div class="ph ' + vid.gradientClass + '" style="' + (vid.image ? 'display:none;' : '') + '"></div>';

      return (
        '<article class="vcard" onclick="window.open(\'' + vid.url + '\', \'_blank\')">' +
          '<div class="thumb">' +
            imageHtml +
            fallbackHtml +
            '<span class="ytplay" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>' +
            '</span>' +
            '<span class="dur">' + vid.duration + '</span>' +
            '<div class="title-on">' + vid.title + '</div>' +
          '</div>' +
          '<div class="meta">' +
            '<span class="tag">' + vid.tag + '</span>' +
            '<h3>' + vid.title + '</h3>' +
            '<span class="sub">' + vid.date + ' · ' + vid.views + '</span>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function hydratePodcast(episodes) {
    var podList = document.getElementById('podList');
    if (!podList) return;
    podList.innerHTML = episodes.map(function (ep) {
      return (
        '<article class="pod-ep" data-num="' + ep.num + '" data-duration="' + ep.duration + '">' +
          '<div class="num">' + ep.num + '</div>' +
          '<div class="ep-info">' +
            '<h4>' + ep.title + '</h4>' +
            '<span>' + ep.duration + ' · ' + ep.date + '</span>' +
          '</div>' +
          '<span class="ep-play" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
          '</span>' +
        '</article>'
      );
    }).join('');
  }

  function hydrateGuides(guides) {
    var guidesGrid = document.getElementById('guidesGrid');
    if (!guidesGrid) return;
    guidesGrid.innerHTML = guides.map(function (g) {
      return (
        '<a href="' + g.url + '" class="gcard reveal" id="' + g.id + '">' +
          '<div class="gicon ' + g.iconType + '">' + g.iconSvg + '</div>' +
          '<span class="gtag">' + g.tag + '</span>' +
          '<h3>' + g.title + '</h3>' +
          '<p>' + g.description + '</p>' +
          '<span class="more">Leer guía ' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M5 12h14M13 6l6 6-6 6"/>' +
            '</svg>' +
          '</span>' +
        '</a>'
      );
    }).join('');
  }

  function hydrateDiary(entries) {
    var diarySlider = document.getElementById('diarySlider');
    if (!diarySlider) return;
    if (!entries || entries.length === 0) {
      diarySlider.innerHTML = '<div style="text-align: center; grid-column: 1 / -1; color: var(--ink-soft);">No hay postales disponibles en este momento.</div>';
      return;
    }
    diarySlider.innerHTML = entries.map(function (entry) {
      // Intenta cargar la imagen física y si no existe, dibuja un placeholder dinámico con gradiente
      var imgHtml = entry.image
        ? '<img src="' + entry.image + '" alt="Postal de ' + entry.location + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';" loading="lazy" />'
        : '';
      var fallbackHtml = '<div class="dc-ph" style="' + (entry.image ? 'display:none; ' : '') + 'position:absolute; inset:0; background:linear-gradient(135deg, var(--ocean-d), var(--ocean), var(--sand)); opacity:0.85;"></div>';

      return (
        '<article class="diary-card reveal">' +
          '<div class="dc-img-wrap">' +
            imgHtml +
            fallbackHtml +
          '</div>' +
          '<span class="dc-loc">📍 ' + entry.location + '</span>' +
          '<p>' + entry.caption + '</p>' +
        '</article>'
      );
    }).join('');
  }

  /* ---------- Interacciones Estructurales Base ---------- */
  function setupCoreInteractions() {
    /* Navbar: Estado al hacer scroll */
    var nav = document.getElementById('nav');
    function onScroll() {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 30);
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Menú mobile */
    var burger = document.getElementById('hamburger');
    var menu = document.getElementById('mobileMenu');
    
    if (burger && menu) {
      burger.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        nav.classList.toggle('menu-open', open);
        burger.setAttribute('aria-expanded', String(open));
      });

      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('open');
          nav.classList.remove('menu-open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 1024 && menu.classList.contains('open')) {
          menu.classList.remove('open');
          nav.classList.remove('menu-open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Carrusel de videos */
    var carousel = document.getElementById('carousel');
    if (carousel) {
      var stepSize = function () {
        var card = carousel.querySelector('.vcard');
        return card ? card.offsetWidth + 26 : 320;
      };
      var next = document.getElementById('nextBtn');
      var prev = document.getElementById('prevBtn');
      if (next) {
        next.addEventListener('click', function () {
          carousel.scrollBy({ left: stepSize(), behavior: 'smooth' });
        });
      }
      if (prev) {
        prev.addEventListener('click', function () {
          carousel.scrollBy({ left: -stepSize(), behavior: 'smooth' });
        });
      }
    }

    /* Formulario de newsletter (Con Lead Magnet en UX Writing) */
    var form = document.getElementById('nlForm');
    var msg = document.getElementById('nlMsg');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailInput = document.getElementById('nlEmail');
        var email = emailInput ? emailInput.value.trim() : '';
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          if (msg) {
            msg.textContent = '¡Listo! Te sumaste al fogón. Te enviamos nuestro Mapa de Free Camps de bienvenida. Revisá tu correo ✦';
            msg.style.color = 'var(--sun)';
          }
          form.reset();
        } else {
          if (msg) {
            msg.textContent = 'Ingresá un email válido para sumarte.';
            msg.style.color = '#ff6b6b';
          }
        }
      });
    }

    /* Tabs de la sección de Mentoría (Syllabus Interactivo) */
    function setupMentorshipTabs() {
      var tabs = document.querySelectorAll('.mentor-card .s-tab');
      if (tabs.length === 0) return;

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });

          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');

          var panels = document.querySelectorAll('.mentor-card .s-panel');
          panels.forEach(function (p) {
            p.style.display = 'none';
            p.classList.remove('active');
          });

          var targetId = tab.getAttribute('data-tab');
          var targetPanel = document.getElementById(targetId);
          if (targetPanel) {
            targetPanel.style.display = 'block';
            targetPanel.classList.add('active');
          }
        });
      });
    }

    setupMentorshipTabs();
  }

  /* ---------- Control de Reproducción Dinámica de Podcast ---------- */
  function setupPodcastPlayerInteractions() {
    var podPlay = document.getElementById('podPlay');
    if (!podPlay) return;

    var playerContainer = podPlay.closest('.pod-player');
    var PLAY_ICON = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>';
    var PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

    /* Acción del botón de reproducción principal */
    podPlay.addEventListener('click', function () {
      var isPlaying = podPlay.classList.toggle('playing');
      
      if (playerContainer) {
        playerContainer.classList.toggle('playing', isPlaying);
      }
      
      if (isPlaying) {
        podPlay.innerHTML = PAUSE_ICON;
        var subInfo = playerContainer.querySelector('.pp-info span');
        if (subInfo && !subInfo.dataset.originalText) {
          subInfo.dataset.originalText = subInfo.textContent;
          subInfo.innerHTML = '<span style="color:var(--spotify); font-weight:600;">▶ Reproduciendo ahora...</span>';
        }
      } else {
        podPlay.innerHTML = PLAY_ICON;
        var subInfoText = playerContainer.querySelector('.pp-info span');
        if (subInfoText && subInfoText.dataset.originalText) {
          subInfoText.textContent = subInfoText.dataset.originalText;
          delete subInfoText.dataset.originalText;
        }
      }
    });

    /* Carga dinámica de episodios al hacer clic en la lista */
    var podList = document.getElementById('podList');
    if (podList) {
      podList.addEventListener('click', function (e) {
        var epCard = e.target.closest('.pod-ep');
        if (!epCard) return;

        var num = epCard.getAttribute('data-num') || '01';
        var title = epCard.querySelector('h4').textContent;
        var duration = epCard.getAttribute('data-duration') || '45 min';

        var playerTitle = playerContainer.querySelector('.pp-info h3');
        var playerMeta = playerContainer.querySelector('.pp-info span');

        if (playerTitle && playerMeta) {
          // Actualiza panel de reproducción
          playerTitle.textContent = 'Ep. ' + num + ' — ' + title;
          playerMeta.textContent = 'CaravanOz Podcast · ' + duration;

          // Borrar meta anterior temporal
          delete playerMeta.dataset.originalText;
        }

        // Forza estado de reproducción ("playing")
        podPlay.classList.add('playing');
        playerContainer.classList.add('playing');
        podPlay.innerHTML = PAUSE_ICON;

        var subInfo = playerContainer.querySelector('.pp-info span');
        if (subInfo) {
          subInfo.dataset.originalText = 'CaravanOz Podcast · ' + duration;
          subInfo.innerHTML = '<span style="color:var(--spotify); font-weight:600;">▶ Reproduciendo ahora...</span>';
        }

        // Reinicia la barra de progreso
        var trackActive = playerContainer.querySelector('.pp-track i');
        if (trackActive) {
          trackActive.style.animation = 'none';
          trackActive.offsetHeight; // trigger reflow
          trackActive.style.animation = null;
        }
      });
    }
  }

  /* ---------- Animación de aparición al hacer scroll ---------- */
  function setupReveals() {
    var items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12 });
      
      items.forEach(function (el) {
        io.observe(el);
      });
    } else {
      items.forEach(function (el) {
        el.classList.add('in');
      });
    }
  }

  // Arrancar el sistema completo
  window.addEventListener('DOMContentLoaded', initUI);
})();
