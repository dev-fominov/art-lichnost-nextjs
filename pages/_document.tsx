import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<script dangerouslySetInnerHTML={{
					__html: `
							(function(m, e, t, r, i, k, a) {
								m[i] = m[i] || function () {
									(m[i].a = m[i].a || []).push(arguments)
								};
							m[i].l = 1 * new Date();
							k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
						})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
							ym(95611639, "init", {
								clickmap: true,
							trackLinks: true,
							accurateTrackBounce: true
						});`,
				}}
				/>

				<noscript>
					<div><img src="https://mc.yandex.ru/watch/95611639" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div>
				</noscript>

				<script dangerouslySetInnerHTML={{
					__html: `
            ! function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://vk.com/js/api/openapi.js?163", t.onload = function() {
                    VK.Retargeting.Init("VK-RTRG-444049-1Kdo0"), VK.Retargeting.Hit()
                }, document.head.appendChild(t)
            }();
						`,
				}}
				/>

				<noscript><img src="https://vk.com/rtrg?p=VK-RTRG-444049-1Kdo0" style={{ position: 'fixed', left: '-9999px' }} alt="" /></noscript>


			</body>
		</Html >
	)
}