const actionBtn = document.querySelector(".action-btn");

const modal = (body) => {
    return `<div class="modal">
    <p class="modal-title ${body.type || "info"}">
        <i data-feather="${body.icon || "info"}"></i>
        ${body.title || "info"}
    </p>
    <p class="modal-description">
    ${body.description || "non description"}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept">${body.accept_btn}</button>
        <button class="modal-decline">${body.decline_btn}</button>
    </div>
    <button class="modal-close-icon"> <i data-feather="x"></i></button>
</div>`
}
const createModal = (value) => {
    const modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = modal(value);
    document.body.appendChild(modalContainer);
    feather.replace();
}
const removeModal = () => {
    const closeBtn = document.querySelector(".modal-close-icon");
    const acceptBtn = document.querySelector(".modal-accept");
    const declineBtn = document.querySelector(".modal-decline");
    const modalContainerd = document.querySelector(".modal-container")
    closeBtn.onclick = () =>{
        modalContainerd.remove();
    }
    acceptBtn.onclick = () =>{
        modalContainerd.remove();
    }
    declineBtn.onclick = () =>{
        modalContainerd.remove();
    }
};

const titleBtn = document.getElementById("titleBtn");
const descriptionBtn = document.getElementById("descriptionBtn");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");


const modalArray = [];


class newModal{
    constructor(title,description){
        this.title = title;
        this.description = description;
    }
    addToArray(){
            modalArray.push(this.title,this.description);
    }
};

const addForModal = () => {
    const modalContainerd = document.querySelector(".modal-container")
    if(!modalContainerd){
    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;
    let agg = new newModal(titleValue,descriptionValue)
    agg.addToArray();
    return;
    }
}
titleBtn.addEventListener("click",addForModal);

const showModal = (e) => {
    createModal({
        icon: "info",
        type: "success",
        title: modalArray[0],
        description: modalArray[1],
        accept_btn: "Zaakceptuj",
        decline_btn: "Anuluj"
    });
    removeModal();
}
const actionSecondBtn = document.querySelector(".second-modal").addEventListener("click", () => {
    createModal({
        type: "success",
        title: "second text",
        description: "ipsum dolor sit amet consectetur adipisicing elit",
        accept_btn: "Zaakceptuj",
        decline_btn: "Anuluj"
    });
    removeModal();
})

actionBtn.addEventListener("click",showModal)