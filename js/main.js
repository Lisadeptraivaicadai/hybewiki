// Chọn tất cả các phần tử cần thiết
const filterBarSection = document.querySelector('.filter-bar-section');
const checkboxes = document.querySelectorAll('.col-button-input-checkbox');

// Tạo một mảng chứa các tên của các phần mục
const listSections = ['section-all', 'section-album', 'section-single', 'section-tour', 'section-concert'];

// Duyệt qua từng checkbox và lắng nghe sự kiện click
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function () {
        // Nếu checkbox đã bị vô hiệu hóa, không làm gì cả
        if (checkbox.disabled) return;
        
        // Bỏ chọn checkbox cũ và cập nhật disabled và checked
        const currentcb = document.querySelector('.col-button-input-checkbox[disabled]');
        if (currentcb) {
            currentcb.disabled = false;
            currentcb.checked = false;
        }

        // Cập nhật checkbox hiện tại
        checkbox.checked = true;
        checkbox.disabled = true;

        // Cập nhật class của filterBarSection và hiển thị các phần mục tương ứng
        filterBarSection.className = 'row filter-bar-section button_news ' + checkbox.id + '-selected';

        // Hiển thị hoặc ẩn các phần mục dựa trên checkbox đã chọn
        listSections.forEach(section => {
            const sectionElement = document.querySelector('.' + section);
            if (checkbox.id === 'all' || checkbox.id === section.replace('section-', '')) {
                sectionElement.style.display = 'block';
            } else {
                sectionElement.style.display = 'none';
            }
        });
    });
});