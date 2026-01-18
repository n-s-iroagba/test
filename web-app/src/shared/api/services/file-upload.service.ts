// import { apiClient } from '../api-client';

export interface FileUploadResponse {
  id: string;
  url: string;
  filename: string;
}

export const FileUploadService = {
  uploadFile: async (file: File) => {
    // const formData = new FormData();
    // formData.append('file', file);

    // In a real app, we would send formData
    // return apiClient.post<FileUploadResponse>('/upload', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // });

    // Mocking response for demo
    return new Promise<{ data: FileUploadResponse }>((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file), // Use object URL for immediate preview in demo
            filename: file.name
          }
        });
      }, 1000);
    });
  }
};
