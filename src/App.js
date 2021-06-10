import React, { useState } from 'react';
import './App.css';
import Modal from './component/Modal';
import VelopertApp from './Velopert/VelopertApp';

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <VelopertApp />
      <>
        <button onClick={openModal}>모달팝업</button>
        <Modal open={modalOpen} close={closeModal} header='Modal heading'>
          리액트 함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
        </Modal>
      </>
    </>
  );
}

export default App;
