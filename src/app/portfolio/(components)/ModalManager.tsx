"use client";

import Modal from "@/app/(components)/Modal";
import AddAssetForm from "./AddAssetForm";
import EditAssetForm from "./EditAssetForm";
import DeleteAssetForm from "./DeleteAssetForm";

export type currentModal =
  | ""
  | "ADD_PORTFOLIO"
  | "EDIT_PORTFOLIO"
  | "DELETE_CONFIRM";

interface ModalManagerProps {
  currentModal: currentModal;
  onToggleModal: () => void;
}

const ModalManager = ({ currentModal, onToggleModal }: ModalManagerProps) => {
  const renderModal = () => {
    switch (currentModal) {
      case "ADD_PORTFOLIO":
        return (
          <Modal
            isOpen={true}
            onToggleModal={onToggleModal}
            title="포트폴리오 추가">
            <AddAssetForm />
          </Modal>
        );

      case "EDIT_PORTFOLIO":
        return (
          <Modal
            isOpen={true}
            onToggleModal={onToggleModal}
            title="포트폴리오 수정">
            <EditAssetForm />
          </Modal>
        );

      case "DELETE_CONFIRM":
        return (
          <Modal isOpen={true} onToggleModal={onToggleModal} title="삭제 확인">
            <DeleteAssetForm />
          </Modal>
        );

      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ModalManager;
