from django.contrib import admin
from .models import Place, Tag, FavoriteList

admin.site.register(Place)
admin.site.register(Tag)
admin.site.register(FavoriteList)

