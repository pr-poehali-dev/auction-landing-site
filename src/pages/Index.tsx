import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('buyers');
  
  const mockBids = [
    { id: 1, product: 'iPhone 15 Pro', buyerPrice: 85000, sellers: 12, timeLeft: '2ч 15м', status: 'active' },
    { id: 2, product: 'MacBook Air M2', buyerPrice: 120000, sellers: 8, timeLeft: '1ч 45м', status: 'active' },
    { id: 3, product: 'AirPods Pro', buyerPrice: 25000, sellers: 15, timeLeft: '45м', status: 'hot' }
  ];

  const mockSellers = [
    { id: 1, name: 'TechStore', rating: 4.9, deals: 1250, avatar: '/placeholder.svg' },
    { id: 2, name: 'ElectronicsHub', rating: 4.8, deals: 980, avatar: '/placeholder.svg' },
    { id: 3, name: 'GadgetPro', rating: 4.7, deals: 756, avatar: '/placeholder.svg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-auction-light to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-auction-orange to-auction-blue rounded-lg flex items-center justify-center">
                <Icon name="Gavel" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-auction-dark">BidReverse</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-auction-dark hover:text-auction-orange transition-colors">Главная</a>
              <a href="#" className="text-auction-dark hover:text-auction-orange transition-colors">Как работает</a>
              <a href="#" className="text-auction-dark hover:text-auction-orange transition-colors">О нас</a>
              <a href="#" className="text-auction-dark hover:text-auction-orange transition-colors">Контакты</a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-auction-blue text-auction-blue hover:bg-auction-blue hover:text-white">
                Войти
              </Button>
              <Button className="bg-auction-orange hover:bg-auction-orange/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-auction-dark mb-6 animate-fade-in">
              Аукцион <span className="text-auction-orange">наоборот</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Покупатели предлагают цену, продавцы борются за сделку. 
              Получите лучшую цену на любой товар!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Button size="lg" className="bg-auction-orange hover:bg-auction-orange/90 text-white px-8 py-3">
                <Icon name="ShoppingCart" className="mr-2" />
                Разместить заявку
              </Button>
              <Button size="lg" variant="outline" className="border-auction-blue text-auction-blue hover:bg-auction-blue hover:text-white px-8 py-3">
                <Icon name="Store" className="mr-2" />
                Стать продавцом
              </Button>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <img 
                src="/img/75b40498-ff77-419a-a871-951c1671f195.jpg" 
                alt="Аукцион платформа" 
                className="rounded-2xl shadow-2xl animate-fade-in"
              />
              <div className="absolute -top-4 -right-4 bg-auction-orange text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-orange">
                🔥 Онлайн торги
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-auction-dark mb-12">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-auction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-auction-dark mb-3">1. Предложите цену</h3>
              <p className="text-gray-600">Опишите товар и укажите желаемую цену. Система найдет подходящих продавцов.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-auction-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-auction-dark mb-3">2. Продавцы соревнуются</h3>
              <p className="text-gray-600">Продавцы предлагают свои условия и борются за вашу заявку в реальном времени.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Handshake" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-auction-dark mb-3">3. Выберите лучшее</h3>
              <p className="text-gray-600">Выберите лучшее предложение и совершите покупку с гарантией безопасности.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Auctions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-auction-dark">Активные торги</h2>
            <div className="flex space-x-2">
              <Button 
                variant={activeTab === 'buyers' ? 'default' : 'outline'}
                onClick={() => setActiveTab('buyers')}
                className={activeTab === 'buyers' ? 'bg-auction-orange hover:bg-auction-orange/90' : ''}
              >
                Заявки покупателей
              </Button>
              <Button 
                variant={activeTab === 'sellers' ? 'default' : 'outline'}
                onClick={() => setActiveTab('sellers')}
                className={activeTab === 'sellers' ? 'bg-auction-blue hover:bg-auction-blue/90' : ''}
              >
                Топ продавцов
              </Button>
            </div>
          </div>

          {activeTab === 'buyers' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBids.map((bid) => (
                <Card key={bid.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{bid.product}</CardTitle>
                      <Badge variant={bid.status === 'hot' ? 'destructive' : 'secondary'}>
                        {bid.status === 'hot' ? '🔥 Горячий' : 'Активный'}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>Осталось: {bid.timeLeft}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Предложенная цена:</span>
                        <span className="text-xl font-bold text-auction-orange">
                          {bid.buyerPrice.toLocaleString()} ₽
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Продавцов в торгах:</span>
                        <span className="font-semibold text-auction-blue">{bid.sellers}</span>
                      </div>
                      <Progress value={Math.random() * 100} className="h-2" />
                      <Button className="w-full bg-auction-blue hover:bg-auction-blue/90">
                        Присоединиться к торгам
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'sellers' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockSellers.map((seller) => (
                <Card key={seller.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={seller.avatar} />
                        <AvatarFallback>{seller.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{seller.name}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold">{seller.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Сделок завершено:</span>
                        <span className="font-semibold text-auction-dark">{seller.deals}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <Icon name="Shield" size={16} />
                        <span>Верифицирован</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-auction-blue">
                        <Icon name="Truck" size={16} />
                        <span>Быстрая доставка</span>
                      </div>
                      <Button className="w-full bg-auction-orange hover:bg-auction-orange/90">
                        Связаться с продавцом
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-auction-dark mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-auction-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-auction-dark mb-2">Торги в реальном времени</h3>
              <p className="text-gray-600 text-sm">Мгновенные уведомления о новых предложениях</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-auction-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-auction-dark mb-2">Безопасные платежи</h3>
              <p className="text-gray-600 text-sm">Защита сделок и гарантия возврата</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-auction-dark mb-2">Рейтинг продавцов</h3>
              <p className="text-gray-600 text-sm">Проверенные продавцы с отзывами</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-auction-dark mb-2">Чат с участниками</h3>
              <p className="text-gray-600 text-sm">Обсуждение условий сделки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-auction-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-auction-orange to-auction-blue rounded-lg flex items-center justify-center">
                  <Icon name="Gavel" size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold">BidReverse</span>
              </div>
              <p className="text-gray-300 text-sm">
                Революционная платформа для торговли, где покупатели устанавливают цены.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-auction-orange transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-auction-orange transition-colors">Разместить заявку</a></li>
                <li><a href="#" className="hover:text-auction-orange transition-colors">Безопасность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-auction-orange transition-colors">Стать продавцом</a></li>
                <li><a href="#" className="hover:text-auction-orange transition-colors">Условия работы</a></li>
                <li><a href="#" className="hover:text-auction-orange transition-colors">Комиссии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>support@bidreverse.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li><a href="#" className="hover:text-auction-orange transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 BidReverse. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;