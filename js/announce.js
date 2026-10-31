    function filterAnnouncements(category) {
      const allLinkElements = document.querySelectorAll('.announcement-container > a');
      const overviewSection = document.querySelector('.announcement-container > .category-section.all');
      const noAnnouncementsMessage = document.getElementById('no-announcements-message');
      let clickableAnnouncementsVisible = 0;
      allLinkElements.forEach(element => {
        element.style.display = 'none';
      });
      if (overviewSection) {
        overviewSection.style.display = 'none';
      }

      if (category === 'all') {
        allLinkElements.forEach(element => {
          element.style.display = 'block';
          clickableAnnouncementsVisible++;
        });
        if (overviewSection) {
          overviewSection.style.display = 'block';
        }
      } else {
        allLinkElements.forEach(element => {
          const innerSection = element.querySelector('.category-section');
          if (innerSection && innerSection.dataset.category === category) {
            element.style.display = 'block';
            clickableAnnouncementsVisible++;
          }
        });
      }

      // --- ADDITION START --- //
      // クリック可能なアナウンスが一つも表示されていない場合、「お知らせなし」メッセージを表示
      if (noAnnouncementsMessage) {
        if (clickableAnnouncementsVisible === 0) {
          noAnnouncementsMessage.style.display = 'block';
        } else {
          noAnnouncementsMessage.style.display = 'none';
        }
      }
      const buttons = document.querySelectorAll('.category-buttons button');
      buttons.forEach(button => {
        if (button.onclick.toString().includes(`'${category}'`)) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
    document.addEventListener('DOMContentLoaded', () => {
      filterAnnouncements('all');
    });
