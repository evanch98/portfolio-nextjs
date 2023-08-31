"use client";

import { useUoPeopleModal } from "@/hooks/use-uopeople-modal";
import Modal from "@/components/ui/modal";

const UoPeopleModal = () => {
  const uoPeopleModal = useUoPeopleModal();
  return (
    <Modal
      title="University of the People"
      description="Bachelor of Science in Computer Science"
      isOpen={uoPeopleModal.isOpen}
      onClose={uoPeopleModal.onClose}
    >
      UoPeople
    </Modal>
  );
};

export default UoPeopleModal;
