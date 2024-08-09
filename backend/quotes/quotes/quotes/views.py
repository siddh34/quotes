from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Quote
from .serializers import QuoteSerializer
import random
# Create your views here.


class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

    @action(detail=False, methods=['get'])
    def random(self, request):
        quotes = Quote.objects.all()
        if not quotes:
            return Response({"detail": "No quotes available."}, status=404)
        random_quote = random.choice(quotes)
        serializer = QuoteSerializer(random_quote)
        return Response(serializer.data)
