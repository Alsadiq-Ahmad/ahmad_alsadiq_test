<template>
  <div
    class="modal fade"
    id="testimonialModal"
    tabindex="-1"
    aria-labelledby="testimonialModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div
        :class="[
          'modal-content',
          {
            'dark-bg text-white': isNightMode,
            'bg-white text-dark': !isNightMode,
          },
        ]"
      >
        <div class="modal-header border-0 d-flex">
          <button
            type="button"
            class="btn-close border-black rounded-circle bg-secondary bg-opacity-25 border-opacity-75"
            :class="[
              isRTL ? 'order-1 me-right' : 'order-2',
              { 'btn-close-white': isNightMode },
            ]"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <h5
            class="modal-title poppins-medium"
            :class="[isRTL ? 'order-2 me-left' : 'order-1']"
            id="testimonialModalLabel"
          >
            {{ $t("Add New Testimonial") }}
          </h5>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3" @click="triggerFileInput">
              <label for="userPhoto" class="form-label poppins-medium">{{
                $t("User Photo")
              }}</label>
              <div
                :class="[
                  'dashed-border dark-border rounded p-3 text-center',
                  {
                    'dark-bg': isNightMode,
                    'drag-over': isDragOver,
                  },
                ]"
             
              >
                <i class="bi bi-file-earmark-image fs-1"></i>

                <p :class="{ 'text-light poppins-medium': isNightMode }">
                  {{ $t("Drop Your Image Here Or Browse") }}
                </p>
                <input
                  type="file"
                  @change="handleFileUpload"
                  class="form-control-file"
                  style="display: none"
                  ref="fileInput"
                />

                <small :class="{ 'text-light poppins-regular': isNightMode }">
                  {{ uploadedFileName || $t("drag-drop-image-rules") }}
                </small>
              </div>
            </div>
            <div class="mb-3">
              <label for="userName" class="form-label poppins-medium">{{
                $t("User Name")
              }}</label>
              <input
                type="text"
                :class="[
                  'form-control',
                  { 'input-dark-bg text-white border-secondary': isNightMode },
                ]"
                id="userName"
              />
            </div>
            <div class="mb-3">
              <label for="companyName" class="form-label poppins-medium">{{
                $t("Company Name")
              }}</label>
              <input
                type="text"
                :class="[
                  'form-control',
                  { 'input-dark-bg text-white border-secondary': isNightMode },
                ]"
                id="companyName"
              />
            </div>
            <div class="mb-3">
              <label for="content" class="form-label poppins-medium">{{
                $t("Content")
              }}</label>
              <textarea
                :class="[
                  'form-control textarea-size',
                  { 'input-dark-bg text-white border-secondary': isNightMode },
                ]"
                id="content"
                rows="3"
                maxlength="100"
                v-model="content"
              ></textarea>
              <small
                :class="[
                  'form-text d-flex justify-content-end text-counter',
                  { 'text-light': isNightMode },
                ]"
              >
                <span class="text-warning">{{ contentLength }}</span>/100
              </small>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn yellow-bg text-dark-color poppins-medium">
                {{ $t("Save") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    isNightMode: {
      type: Boolean,
      default: false,
    },
    isRTL: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      content: "",
      isDragOver: false,
      uploadedImage: null,
      uploadedFileName: null, // store the uploaded file name
    };
  },
  computed: {
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
  
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadFile(file);
      }
    },
    uploadFile(file) {
      this.uploadedFileName = file.name; // Store the file name
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style scoped>

</style>
