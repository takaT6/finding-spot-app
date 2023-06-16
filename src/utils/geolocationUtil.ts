export const getCurrentPosition = (options = {}) => {
  if (navigator.geolocation) {
    return new Promise<GeolocationPosition>(
      (
        resolve: (position: GeolocationPosition) => void,
        reject: (positionError: GeolocationPositionError) => void
      ) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

export const getLatLng = async () => {
  try {
    let position = await getCurrentPosition();
    const lat = position!.coords.latitude;
    const lng = position!.coords.longitude;
    console.log("position is ", lat, lng);
    return { lat, lng } as google.maps.LatLngLiteral;
  }
  catch (error) {
    console.log(error);
  }
};

// export const getLatLng = (func: Function) => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(() => {
//       func();
//     });
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// };




// 2 スポットの位置情報を取得します。これには、Google Maps JavaScript APIを使用します。以下は、位置情報を取得するサンプルコードです。
// // スポットの緯度と経度を指定して、マーカーを作成する
// var marker = new google.maps.Marker({
//     position: { lat: 35.0116, lng: 135.7681 },
//     map: map,
//     title: "Kyoto Tower"
//   });

//   // スポットの緯度と経度をLatLngオブジェクトに格納する
//   var spotLatLng = marker.getPosition();



// 3 ユーザーの位置とスポットの位置の距離を計算します。これには、google.maps.geometry.spherical.computeDistanceBetweenメソッドを使用します。以下は、距離を計算するサンプルコードです。
// // ユーザーの位置とスポットの位置の距離を計算する
// var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, spotLatLng);

// // 距離をメートルからキロメートルに変換する
// distance = distance / 1000;

// CREATE TABLE spots (
//     id INT PRIMARY KEY,
//     name VARCHAR(255),
//     area VARCHAR(255),
//     postal_code VARCHAR(255),
//     address1 VARCHAR(255),
//     address2 VARCHAR(255),
//     address3 VARCHAR(255),
//     latitude FLOAT,
//     longitude FLOAT,
//     parking_info VARCHAR(255),
//     business_hours VARCHAR(255),
//     regular_holiday VARCHAR(255),
//     website_url VARCHAR(255),
//     photo BLOB,
//     rating FLOAT,
//     review TEXT,
//     description TEXT,
//     recommended_point TEXT,
//     created_at TIMESTAMP,
//     updated_at TIMESTAMP
//   );

// CREATE TABLE spot_genre (
//     spot_id INT NOT NULL,
//     genre_id INT NOT NULL,
//     PRIMARY KEY (spot_id, genre_id),
//     FOREIGN KEY (spot_id) REFERENCES spots(id),
//     FOREIGN KEY (genre_id) REFERENCES genres(id)
//   );