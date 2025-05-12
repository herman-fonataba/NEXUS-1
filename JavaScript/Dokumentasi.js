        const documentasiHarianFolders = [
            { 
                date: "2022-2023", 
                label: "Dok Tahun 2022-2023", 
                images: ["Dokumentasi/101.jpg", "Dokumentasi/102.jpg", "Dokumentasi/103.jpg", "Dokumentasi/104.jpg", "Dokumentasi/105.jpg", "Dokumentasi/106.jpg", "Dokumentasi/107.jpg", "Dokumentasi/108.jpg", "Dokumentasi/109.jpg"], 
                videos: ["Dokumentasi/2022 (1).mp4", "Dokumentasi/2022 (2).mp4", "Dokumentasi/2022 (3).mp4", "Dokumentasi/2022 (4).mp4", "Dokumentasi/2022 (5).mp4", "Dokumentasi/2022 (6).mp4", "Dokumentasi/2022 (7).mp4"] 
            },
                        { 
                date: "08-11-2024", 
                label: "Jum, 08-11-2024", 
                images: ["Dokumentasi/51.jpg", "Dokumentasi/52.jpg", "Dokumentasi/53.jpg", "Dokumentasi/54.jpg", "Dokumentasi/55.jpg", "Dokumentasi/56.jpg", "Dokumentasi/57.jpg", "Dokumentasi/58.jpg", "Dokumentasi/59.jpg", "Dokumentasi/60.jpg"], 
                videos: ["Dokumentasi/64.mp4", "Dokumentasi/65.mp4"] 
            },
            { 
                date: "06-11-2024", 
                label: "Rab, 06-11-2024", 
                images: ["Dokumentasi/41.jpg", "Dokumentasi/42.jpg", "Dokumentasi/43.jpg", "Dokumentasi/44.jpg", "Dokumentasi/45.jpg"], 
                videos: ["Dokumentasi/46.mp4"] 
            },
            { 
                date: "30-10-2024", 
                label: "Rab, 30-10-2024", 
                images: ["Dokumentasi/1.jpg", "Dokumentasi/2.jpg", "Dokumentasi/3.jpg", "Dokumentasi/4.jpg", "Dokumentasi/5.jpg", "Dokumentasi/6.jpg", "Dokumentasi/7.jpg"], 
                videos: ["Dokumentasi/8.mp4", "Dokumentasi/9.mp4"] 
            },
            { 
                date: "23-10-2024", 
                label: "Rab, 23-10-2024", 
                images: ["Dokumentasi/21.jpg", "Dokumentasi/22.jpg", "Dokumentasi/23.jpg", "Dokumentasi/24.jpg", "Dokumentasi/25.jpg"],
                videos: [] 
            },
            { 
                date: "18-10-2024", 
                label: "Jum, 18-10-2024", 
                images: ["Dokumentasi/11.jpg", "Dokumentasi/12.jpg", "Dokumentasi/13.jpg", "Dokumentasi/14.jpg", "Dokumentasi/15.jpg", "Dokumentasi/16.jpg", "Dokumentasi/17.jpg", "Dokumentasi/18.jpg", "Dokumentasi/19.jpg"],
                videos: [] 
            },
            { 
                date: "23-08-2024", 
                label: "Jum, 23-08-2024", 
                images: ["Dokumentasi/31.jpg", "Dokumentasi/32.jpg", "Dokumentasi/33.jpg", "Dokumentasi/34.jpg", "Dokumentasi/35.jpg"],
                videos: [] 
            },
            { 
                date: "20-10-2024", 
                label: "Sel, 20-08-2024", 
                images: ["Dokumentasi/26.jpg", "Dokumentasi/27.jpg", "Dokumentasi/28.jpg", "Dokumentasi/29.jpg", "Dokumentasi/30.jpg"],
                videos: [] 
            },
        ];

        function showFolders(type) {
            const folderList = document.getElementById("folderList");
            const dynamicFolders = document.getElementById("dynamicFolders");
            dynamicFolders.innerHTML = ""; 

            document.getElementById("dataUlang").style.display = "none";
            document.getElementById("pendaftaran").style.display = "none";

            if (type === 'documentasiHarian') {
                documentasiHarianFolders.forEach(folder => {
                    const folderDiv = document.createElement('div');
                    folderDiv.className = 'folder';
                    folderDiv.onclick = () => showContent(folder.date, folder.images, folder.videos);
                    folderDiv.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill="#FFA000" d="M10 4H2v16h20V6H12l-2-2z"/>
                        </svg>
                        <span class="folder-label">${folder.label}</span>
                    `;
                    dynamicFolders.appendChild(folderDiv);
                });
            }

            document.getElementById("documentasiHarian").style.display = "none";
            folderList.classList.remove("hidden");
        }

        function showContent(date, images, videos) {
            const contentPage = document.getElementById("contentPage");
            const contentArea = document.getElementById("contentArea");
            contentArea.innerHTML = `<h2>Dokumentasi ${date}</h2>`;

            images.forEach(imageSrc => {
                const imgElement = document.createElement('img');
                imgElement.src = imageSrc;
                imgElement.alt = `Gambar untuk ${date}`;
                imgElement.onclick = () => openModal(imgElement.src);
                contentArea.appendChild(imgElement);
            });

            videos.forEach(videoSrc => {
                const videoElement = document.createElement('video');
                videoElement.src = videoSrc;
                videoElement.controls = true;
                videoElement.addEventListener("play", () => pauseOtherVideos(videoElement));
                contentArea.appendChild(videoElement);
            });

            contentPage.classList.remove("hidden");
            document.getElementById("folderList").classList.add("hidden");
        }

        function openModal(src) {
            const modal = document.getElementById("imageModal");
            const modalImage = document.getElementById("modalImage");
            const downloadButton = document.getElementById("downloadButton");

            modal.style.display = "flex";
            modalImage.src = src;
            downloadButton.href = src;
        }

        function closeModal() {
            document.getElementById("imageModal").style.display = "none";
        }

        function pauseOtherVideos(currentVideo) {
            document.querySelectorAll("video").forEach(video => {
                if (video !== currentVideo) {
                    video.pause();
                }
            });
        }

        function goBack() {
            document.getElementById("folderList").classList.add("hidden");
            document.getElementById("documentasiHarian").style.display = "block";
            document.getElementById("dataUlang").style.display = "flex";
            document.getElementById("pendaftaran").style.display = "flex";
        }

        function goToFolders() {
            document.getElementById("contentPage").classList.add("hidden");
            document.getElementById("folderList").classList.remove("hidden");
        }
    