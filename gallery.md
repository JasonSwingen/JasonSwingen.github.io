---
layout: default
title: Hunting and Fishing Gallery
galleryid: Gallery
permalink: /gallery/
---
<div class="gallery">

	{% for gallery in site.data.gallery %}
	  {% if gallery.id == page.galleryid %}
	    {% for image in gallery.images %}
			<a href="{{ gallery.imagefolder }}/{{ image.name }}" data-lightbox="{{ gallery.id }}" data-title="{{ image.text }}" class="thumb" style="background-image: url('{{ gallery.imagefolder }}/{{ image.name }}');" title="{{ image.text }}"></a>
	    {% endfor %}
	  {% endif %}
	{% endfor %}

</div>