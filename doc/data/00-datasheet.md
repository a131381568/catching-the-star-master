# Star 資料表

## 一、各單元標題資訊 ( page_info )

| page_title<br />( character varying ) | sub_page_title<br />( character varying ) | page_route<br />( character varying ) |
| --- | --- | --- |
| Catch the stars | 誰能數得清天上的星星？誰能說出它們對世界的影響？——詹・湯姆遜 | Home |
| 關於我們 | about | About |
| 天文科普 | science | Science |
| 天文科普 | science | SingleScience |
| 星星物語 | story | Story |
| 星星物語 | story | SingleStory |
| 天文設施 | facilities | Facilities |
| 觀星地點 | stargazing | Stargazing |
| 標籤彙整 | tag | Archive |
| 搜尋頁面 | search | Search |

## 二、關於我們 ( about_info )

| visual<br />( character varying ) | slogan<br />( character varying ) | philosophy<br />( text ) | quote<br />( text ) | epilogue<br />( text ) |
| --- | --- | --- | --- | --- |
| /img/kenny-logo.png | 我們是「雲上的小貓」，致力於寫下故事、留下故事。 | 人是被賦予豐富情感的動物，會笑、會哭、會憤怒、會感動，所以有溫度的故事是能夠觸動人心的，甚至能夠在心中種下一顆希望的種子，在未來成長為茁壯的大樹。<br /><br />正因凡走過必留下痕跡，可以是歷史？<br />也可以是虛構的童話？<br />不管它是什麼？<br /><br />總會能夠會帶給我們些什麼？<br />對吧？<br /><br />無論是虛無飄渺的疑問？還是膽戰心驚的恐懼？又或著肯定的勇氣？每個人都有故事，因為這是我們自己開啟的故事——。 | 「我和他就好像天上的星星，遠看好像距離很近，但實際上卻是相當遙遠的。」<br /><br />「這片夜空中，只有一顆星星在微弱的閃鑠著，好像很孤單一樣？但是我們每個人只要一抬頭就能看見它，<br />所以即使身在遠方，星星也能夠獨自努力發光了。」<br /><br />——《虎與龍》 | 『打從地球誕生的那一刻起，天空就已經用這樣的姿態為我們在夜晚蓋上滿天星斗的布幕了。』<br /><br />在這宏觀的世界，世人們將星座和神話故事相互結合，把夜空中同一個區域的星星，分為一個個的星座，每一個星座都有屬於它們自己的故事，令人嚮往和好奇。<br /><br />而製造這浪漫的舞台，究竟是什麼構造？它們的由來又什麼？是否是我們能夠觸手可及的呢？<br />它們一直都存在我們的身旁，只是我們一直都沒注意到而已。<br /><br /><strong class="text-sp-color-light">這次讓我們來好好記下它們的存在的軌跡。</strong> |

## 三、文章分類 ( post_categories )

| post_category_orderid<br />( integer ) | post_category_name<br />( character varying ) | post_category_id<br />( character varying ) |
| --- | --- | --- |
| 1 | 太陽系和恆星 | solar |
| 2 | 宇宙 | universe |
| 3 | 特殊天象 | phenomena |
| 4 | 天文觀測 | observation |
| 5 | 科學家 | scientist |
| 6 | 曆法 | calendar |
| 7 | 其他 | other |
| 8 | 星星故事 | story |

## 四、天文科普 ( science )

| orderid<br />( integer ) | postid<br />( integer ) | title<br />( character varying ) | categoryid<br />( character varying ) | updatetime<br />( date ) | content<br />( text ) | published<br />(boolean) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 4813 | 太陽系 | solar | 2022-04-06 | .md | true |

## 五、天文設施-機構 ( facilities_list )

| facilities_orderid<br />( integer ) | facilities_title<br />( character varying ) | facilities_description<br />( text ) | facilities_image<br />( character varying ) | facilities_link<br />( character varying ) | published<br />( boolean ) |
| --- | --- | --- | --- | --- | --- |
| 1 | 台北市立天文科學教育館 | 位於臺灣臺北市士林區的臺北科學藝術園區內，為臺北市政府教育局所屬之社會教育機構，成立於1996年11月7日 | /img/facilities-bg-01.jpg | https://www.tam.gov.taipei/ | true |
| 2 | 南瀛天文教育園區 | 位於台南市大內區的天文教育館，原為台南縣政府以天文推廣教育為主要目的而設立的「南瀛天文教育園區」 | /img/facilities-bg-02.jpg | https://taea.tn.edu.tw/ | true |
| 3 | 國立自然科學博物館 | 簡稱科博館，是位於臺灣臺中市北區的公立科學博物館，是中華民國國家十二項建設文化建設項下興建的首座科學博物館 | /img/facilities-bg-03.jpg | https://www.nmns.edu.tw/ch/ | true |

## 六、天文設施-天文台 ( observatories_list )

| observatory_orderid<br />( integer ) | observatory_category_name<br />( character varying ) | observatory_category_id<br />( character varying ) | observatory_post_content<br />( text ) | published<br />( boolean ) |
| --- | --- | --- | --- | --- |
| 1 | 研究及學術 | research | research.md | true |
| 2 | 教育單位 | education | education.md | true |
| 3 | 其他單位 | otherunit | otherunit.md | true |

## 七、觀星地點 ( stargazing_list )

http://maps.google.com/?q=緯度,經度

http://maps.google.com/?q=23.12330848849819, 121.40687774577503

| stargazing_orderid<br />( integer ) | stargazing_title<br />( character varying ) | stargazing_latitude<br />( numeric (18,15)) | stargazing_longitude<br />( numeric (18,15)) | stargazing_image<br />( character varying ) | stargazing_description<br />( text ) | stargazing_address<br />( character varying ) | stargazing_link<br />( character varying ) | stargazing_lid<br />( character varying ) | published<br />(boolean) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 台東：三仙台風景區 | 23.12330848849819 | 121.40687774577503 | /img/mark-0001.jpg | 海浪造型的三仙台，是台東地標，來到觀星時節時，有機會清晰地看見銀河系美景，碧藍大海呼應滿天繁星的紫藍色，有種奇幻之美，快來捕捉這絕美的時刻！ | 臺東縣成功鎮三仙里基翬路74號 | https://goo.gl/maps/NTmD84bXT3U37VVt9 | 1650321458 | true |
| 2 | 台東：南田觀景台 | 22.270049870794672 | 120.88903677645098 | /img/mark-0002.jpg | 透過專業攝影的快門，清楚地看見星星移動的軌跡，讓人就像是穿越時空般浪漫，簡直就像走進璀璨繁星的無敵星星隧道～ | 臺東縣大武鄉南田 | https://goo.gl/maps/j7xnTzti8MASyZcx7 | 1650321459 | true |
| 3 | 台東：加路蘭遊憩區 | 22.80795281624045 | 121.19650638837328 | /img/mark-0003.jpg | 加路蘭遊憩區是台東人最美星空的推薦！大片草坪上有特殊的藝術造景，怎麼拍都美！還可以聽著海浪聲，仰望繁點的群星，超療癒啊～ | 臺東縣臺東市富岡漁港往北走1公里 | https://goo.gl/maps/AgcdwR7vf5qyvUUYA | 1650321460 | true |
| 4 | 台東：長濱金剛大道 | 23.329304670426 | 121.44073286111994 | /img/mark-0004.jpg | 繁星就像是從銀河偷溜了出來，運氣好時可以在金剛大道觀看銀河橫跨夜空的美，只要仰望臺東的天空，就能看見令人屏息的滿天星斗，讓人讚嘆大自然的不可思議啊～ | 臺東縣長濱鄉東13鄉道(長光產業道路) | https://goo.gl/maps/3vh39x3NH3A6ReeT6 | 1650321461 | true |
| 5 | 台東：大武濱海公園 | 22.359312118429415 | 120.9075719954937 | /img/mark-0005.jpg | 沿著海岸線，可見群星閃爍著，大武濱海公園的星群屬於三等星，雖然沒有一等星的星光閃爍，但可以享受躺在海灘旁細數星星的無敵浪漫！ | 臺東縣大武鄉大武濱海公園 | https://goo.gl/maps/Rj48PiCMQMjnBtB8A | 1650321462 | true |
| 6 | 綠島：帆船鼻大草原 | 22.636130832588435 | 121.50827758134503 | /img/mark-0006.jpg | 位於台灣本島外的綠島，相較於都市的光害少了許多，尤其是帆船鼻大草原，站在景觀台上擁抱夜空的點點繁星，實在是太幸福啦～ | 臺東縣綠島鄉東南角 | https://goo.gl/maps/LWwkBgDfsYTouhmQ7 | 1650321463 | true |
| 7 | 蘭嶼：蘭嶼氣象站 | 22.037406340161123 | 121.55864597644853 | /img/mark-0007.jpg | 蘭嶼有台灣最美小島封號，自然原始，讓這裡成了觀星最美小島！置高點的蘭嶼氣象站，是獨占山景及星空的絕美地方，天氣好時，就像是銀河系覆蓋了整個島嶼，哪怕只是一秒，都讓人美到捨不得眨眼～ | 臺東縣蘭嶼鄉紅頭村2號 | https://goo.gl/maps/AwNsdmEfpZYY7mfR7 | 1650321464 | true |
| 8 | 台東：池上大坡池 | 23.11698444511837 | 121.22535837679713 | /img/mark-0008.jpg | 大坡池白天是花東縱谷知名的景點，不少人會選擇在當地騎單車、賞夏荷、遊竹筏趕送美麗樸素的景色。不過大坡池的夜景也讓人驚艷，天氣好便能看見滿天的星斗倒映於水面中，是賞星必去景點！ | 臺東縣池上鄉(臺9線322K東側轉入) | https://goo.gl/maps/5RwmrGRsVf6rZjx78 | 1650321465 | true |
| 9 | 台東：關山親水公園 | 23.040162889616862 | 121.17393181278385 | /img/mark-0009.jpg | 位於海岸山脈與中央山脈縱谷間的關山親水公園，地理位置清淨優雅，是親子旅遊、戲水與騎單車的好去處，白天能眺望關山鎮無邊際的田園風光，而夜間則能抬頭仰望繁星點點的絕美風景。 | 臺東縣關山鎮隆盛路1號 | https://goo.gl/maps/5zguXmXyLv5F89r77 | 1650321466 | true |
| 10 | 台東：都蘭觀海公園 | 22.8729189338634 | 121.23487143597846 | /img/mark-0010.jpg | 都蘭觀海公園位於臺11線旁，園區內有兩條對外道路，可區分通道管控車輛通行，而且園區停車場位於觀星草原平台的下方，所以不用擔心車燈光害影響觀星，為我們提供最高品質的星空美景。 | 臺東縣東河鄉都蘭61號 | https://goo.gl/maps/vAQroTKdWDKDUjf48 | 1650321467 | true |
| 11 | 台東：鹿野高台高眺亭 | 22.9173827688225 | 121.12273028810145 | /img/mark-0011.jpg | 鹿野高台為於花東縱谷南段，而鹿野高台也是熱氣球的舉辦的，吸引各地旅客前往朝聖。也因為地勢高，可以俯瞰鹿野溪與卑南溪的匯流口，視野相當開闊，幾乎無光害，是絕佳的觀星地點。 | 台東縣鹿野鄉高台路42巷84號 | https://goo.gl/maps/hMRm35kSmvkG5R6Y8 | 1650321468 | true |
| 12 | 台東：金針山湛藍若洗觀景平台 | 22.626562086369855 | 120.97615874768186 | /img/mark-0012.jpg | 位於太麻里的金針山是著名的賞花勝地，四季造訪皆能觀賞到滿山遍野不同的花朵盛開美景。除了白天可以賞花看海景外，夜晚也可欣賞星空夜景與月光海色，美不勝收的景色一生一定要去一次。 | 台東縣太麻里鄉大王村 | https://goo.gl/maps/AHapEU2vd3EKi2Xk6 | 1650321469 | true |
| 13 | 台東：富源景觀平台 | 22.828574143383403 | 121.15307085653819 | /img/mark-0013.jpg | 富源景觀平台視野遼闊，可以360度觀景，一邊能眺望都蘭山與綠島，而另一邊則可以看見卑南溪、小黃山、利吉惡地等獨特地理景觀，把東海岸景緻盡收眼底。開闊的視野是觀星的絕佳景點。 | 臺東縣卑南鄉富源197縣道56公里處 | https://goo.gl/maps/Wewq4bnDpgtNxoFF6 | 1650321470 | true |

---
