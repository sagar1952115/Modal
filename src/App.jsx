import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex  flex-col items-center justify-center min-h-screen">
      <button
        onClick={openModal}
        className=" btn-dark rounded-lg shadow-md "
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="This is a modal built with reactjs and tailwind css">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit nisi debitis aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi quam itaque a. Voluptate impedit, nulla hic quae cumque distinctio quasi, deserunt similique excepturi facere quas deleniti? Accusantium error exercitationem ratione veritatis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi quasi, aliquid itaque minus reprehenderit ex ut, nisi quia vero est maiores vitae a odit hic unde? Nisi reprehenderit commodi fugiat et cupiditate saepe expedita, repudiandae eum asperiores obcaecati recusandae? Quas voluptas amet animi, voluptates eligendi nihil magnam nemo a, perspiciatis, nulla minus consequuntur tempore at. Odit mollitia, porro sequi modi suscipit quam, molestias inventore voluptates dolores nulla nisi nemo corrupti voluptas eaque ducimus fugiat? Deserunt asperiores veritatis eveniet ipsum dicta ex necessitatibus aperiam, explicabo maiores dolores, rerum distinctio eum nesciunt dolorem non a eligendi. Adipisci aliquam nulla sint eveniet? Amet tempore praesentium alias asperiores quas corporis blanditiis, adipisci, illum, facere minima enim laudantium! Suscipit magni doloribus quidem corrupti, reiciendis qui delectus, eos non minus aperiam perspiciatis cum? Tenetur id laboriosam tempora magni aliquam deleniti impedit ipsam optio dolorem quae laudantium libero totam, rerum, ex reprehenderit officiis? Beatae facilis autem accusamus nisi, quasi doloremque ullam aut est. Alias est inventore dolorem laudantium. Repudiandae quisquam, tenetur perspiciatis culpa obcaecati voluptatibus voluptate accusantium voluptatum facere, non a vel numquam consectetur ea harum deserunt dolores natus ut alias. Esse beatae velit doloribus. At consequatur, sequi magni quibusdam consequuntur soluta ab! Quasi unde numquam animi, incidunt molestias quisquam perspiciatis laboriosam totam nisi rerum? Porro, explicabo doloremque! Repellat quod veritatis ab, assumenda molestias veniam esse debitis quasi tempore asperiores pariatur dolores voluptates beatae, odio nesciunt magnam animi et non officia repellendus rerum est? Reprehenderit eaque distinctio qui odio, id perferendis architecto nesciunt ut labore doloribus autem totam. Optio cumque veritatis aliquam, maiores libero neque laboriosam voluptatibus quo at dolorem quam, quae similique eos cupiditate inventore esse dolore soluta magnam facilis dolores perferendis dignissimos laborum. Asperiores nobis corporis aliquid adipisci a magni, maxime magnam autem enim iste. Doloremque ullam temporibus odit excepturi adipisci, hic voluptas eligendi sunt et. Ad aspernatur dolor recusandae, dolorum officia id ducimus quisquam tempore quas. Optio ex libero labore impedit, fugiat officiis, minima dolores, nobis animi hic saepe nisi repellat id sapiente dignissimos aliquid quis. suscipit possimus illo veritatis tempore sapiente dolores totam explicabo eaque perferendis quia amet quos omnis optio, perspiciatis vero. Ab?  
        </p>
      </Modal>
    </div>
  );
};

export default App;
