import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const assignments = [
    {
      number: 1,
      title: "Анализ веб-сервисов",
      tools: ["Figma", "Canva", "Adobe XD"],
      liked: "Удобный интерфейс и быстрая работа",
      disliked: "Ограничения в бесплатной версии",
      rating: 4
    },
    {
      number: 2,
      title: "Создание прототипов",
      tools: ["Sketch", "InVision", "Marvel"],
      liked: "Возможность быстрого прототипирования",
      disliked: "Сложная навигация в некоторых инструментах",
      rating: 5
    },
    {
      number: 3,
      title: "Работа с цветом",
      tools: ["Coolors", "Adobe Color", "Paletton"],
      liked: "Генерация гармоничных палитр",
      disliked: "Не всегда подходящие комбинации",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="animate-fade-in">
          <section className="mb-16 text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center border-4 border-accent/20">
                <Icon name="User" size={64} className="text-accent" />
              </div>
            </div>
            <h1 className="text-5xl font-heading font-bold mb-4 text-primary">
              Отчет по дисциплине ТЦО
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Студент: [Ваше имя]
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="GraduationCap" size={16} className="mr-2" />
                Технология создания образовательного контента
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Calendar" size={16} className="mr-2" />
                2024/2025
              </Badge>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <div className="bg-card rounded-lg p-8 shadow-md border animate-fade-in">
              <div className="flex items-center mb-6">
                <Icon name="UserCircle" size={32} className="text-accent mr-4" />
                <h2 className="text-3xl font-heading font-semibold text-primary">
                  О себе
                </h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Меня зовут [Ваше имя], я студент [курс/группа]. В рамках изучения дисциплины 
                  "Технология создания образовательного контента" я познакомился с современными 
                  инструментами для создания и анализа цифрового контента.
                </p>
                <p>
                  Этот курс помог мне глубже понять процессы проектирования пользовательских 
                  интерфейсов, работы с цветом и типографикой, а также принципы создания 
                  качественного образовательного контента.
                </p>
                <div className="flex gap-2 flex-wrap mt-6">
                  <Badge className="bg-accent text-accent-foreground">Веб-дизайн</Badge>
                  <Badge className="bg-accent text-accent-foreground">UX/UI</Badge>
                  <Badge className="bg-accent text-accent-foreground">Прототипирование</Badge>
                  <Badge className="bg-accent text-accent-foreground">Анализ инструментов</Badge>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <div className="flex items-center mb-8">
              <Icon name="FileText" size={32} className="text-accent mr-4" />
              <h2 className="text-3xl font-heading font-semibold text-primary">
                Отчеты по заданиям
              </h2>
            </div>
            
            <div className="grid gap-6">
              {assignments.map((assignment, index) => (
                <Card 
                  key={assignment.number} 
                  className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-heading flex items-center gap-3">
                          <Badge variant="outline" className="text-lg px-3 py-1">
                            №{assignment.number}
                          </Badge>
                          {assignment.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base">
                          Использованные инструменты: {assignment.tools.join(", ")}
                        </CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i}
                            name={i < assignment.rating ? "Star" : "Star"}
                            size={20}
                            className={i < assignment.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="ThumbsUp" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Что понравилось:</h4>
                        <p className="text-muted-foreground">{assignment.liked}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="ThumbsDown" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Что не понравилось:</h4>
                        <p className="text-muted-foreground">{assignment.disliked}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <Card className="bg-accent/5 border-accent/20 animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Trophy" size={32} className="text-accent" />
                  <CardTitle className="text-2xl font-heading text-primary">
                    Любимая работа
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed text-lg">
                  Больше всего мне понравилась работа №2 "Создание прототипов". Эта задача 
                  позволила раскрыть творческий потенциал и применить на практике теоретические 
                  знания о пользовательских интерфейсах. Работа с инструментами прототипирования 
                  помогла понять, как важна визуализация идей на ранних этапах проектирования.
                </p>
              </CardContent>
            </Card>
          </section>

          <footer className="text-center text-muted-foreground mt-16 pb-8">
            <p className="flex items-center justify-center gap-2">
              <Icon name="BookOpen" size={18} />
              Отчет подготовлен в рамках курса ТЦО
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
