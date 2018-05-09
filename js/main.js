function drawcards(cards) {
	$.each(cards, function(c) {
						var card = cards[c];
            for (i=0;i<parseInt(card.qtd);i++) {
                    r_card = ich.card(card);
						        $('#content').append(r_card);

            }
					});
				}
